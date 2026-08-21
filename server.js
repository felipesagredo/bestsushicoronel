/**
 * BESTSUSHI CORONEL - RAILWAY PRODUCTION SERVER
 * Simple, fast Node.js HTTP server for static website hosting
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;

// Sync generated product images if in local environment
const brainDir = 'C:\\Users\\felip\\.gemini\\antigravity-ide\\brain\\37be390c-dee3-401b-84fc-8d53faf328bf';
const imgMap = {
  'sushi_30_piezas_1787288485973.jpg': 'assets/promo_sushi_30.jpg',
  'sushi_40_piezas_1787288504535.jpg': 'assets/promo_sushi_40.jpg',
  'sushi_30_clasica_1787288533229.jpg': 'assets/promo_sushi_30_clasica.jpg',
  'sushi_40_clasica_1787288560555.jpg': 'assets/promo_sushi_40_clasica.jpg',
  'handroll_1x_1787288593038.jpg': 'assets/promo_handroll_1x.jpg',
  'handroll_2x_1787288635782.jpg': 'assets/promo_handroll_2x.jpg',
  'handroll_3x_1787288676406.jpg': 'assets/promo_handroll_3x.jpg',
  'empanada_5x_1787288720106.jpg': 'assets/promo_empanada_5x.jpg',
  'combo_mixto_rey_1787288768360.jpg': 'assets/promo_combos_mixto.jpg',
  'salsa_teriyaki_1787288822030.jpg': 'assets/promo_salsa_teriyaki.jpg',
  'salsas_trio_1787288883541.jpg': 'assets/promo_salsas_trio.jpg'
};
try {
  for (const [src, dst] of Object.entries(imgMap)) {
    const srcPath = path.join(brainDir, src);
    const dstPath = path.join(__dirname, dst);
    if (fs.existsSync(srcPath) && !fs.existsSync(dstPath)) {
      fs.copyFileSync(srcPath, dstPath);
    }
  }
} catch(e) {
  // Ignored if in cloud environment
}

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

// Helper to parse JSON request bodies
function parseJsonBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch (e) {
        resolve(null);
      }
    });
  });
}

// Basic Token Authentication check (reads from environment variable)
function checkAuth(req) {
  const token = req.headers['x-admin-token'] || '';
  const adminPassword = process.env.ADMIN_PASSWORD || 'bestsushiadmin123';
  return token === adminPassword;
}

const server = http.createServer(async (req, res) => {
  let reqUrl = req.url.split('?')[0];

  // API Routes
  if (reqUrl.startsWith('/api/')) {
    res.setHeader('Content-Type', 'application/json; charset=UTF-8');
    
    // GET /api/menu
    if (reqUrl === '/api/menu' && req.method === 'GET') {
      const menuPath = path.join(__dirname, 'data', 'menu.json');
      fs.readFile(menuPath, 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end(JSON.stringify({ error: 'Error leyendo menú' }));
        } else {
          res.writeHead(200);
          res.end(data);
        }
      });
      return;
    }

    // GET /api/verify-token
    if (reqUrl === '/api/verify-token' && req.method === 'GET') {
      if (checkAuth(req)) {
        res.writeHead(200);
        res.end(JSON.stringify({ success: true }));
      } else {
        res.writeHead(401);
        res.end(JSON.stringify({ error: 'No autorizado' }));
      }
      return;
    }

    // POST /api/menu (Save/Update entire menu)
    if (reqUrl === '/api/menu' && req.method === 'POST') {
      if (!checkAuth(req)) {
        res.writeHead(401);
        res.end(JSON.stringify({ error: 'No autorizado' }));
        return;
      }

      const body = await parseJsonBody(req);
      if (!body) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: 'JSON inválido' }));
        return;
      }

      const menuPath = path.join(__dirname, 'data', 'menu.json');
      fs.writeFile(menuPath, JSON.stringify(body, null, 2), 'utf8', (err) => {
        if (err) {
          res.writeHead(500);
          res.end(JSON.stringify({ error: 'Error guardando menú' }));
        } else {
          res.writeHead(200);
          res.end(JSON.stringify({ success: true }));
        }
      });
      return;
    }

    // GET /api/reviews
    if (reqUrl === '/api/reviews' && req.method === 'GET') {
      const reviewsPath = path.join(__dirname, 'data', 'reviews.json');
      fs.readFile(reviewsPath, 'utf8', (err, data) => {
        if (err) {
          res.writeHead(200);
          res.end(JSON.stringify({ reviews: [] }));
        } else {
          res.writeHead(200);
          res.end(data);
        }
      });
      return;
    }

    // POST /api/reviews (Add review)
    if (reqUrl === '/api/reviews' && req.method === 'POST') {
      const body = await parseJsonBody(req);
      if (!body || !body.productId || !body.userName || !body.rating || !body.commentText) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: 'Datos de reseña incompletos o inválidos' }));
        return;
      }

      const reviewsPath = path.join(__dirname, 'data', 'reviews.json');
      fs.readFile(reviewsPath, 'utf8', (err, data) => {
        let reviewsData = { reviews: [] };
        if (!err) {
          try {
            reviewsData = JSON.parse(data);
          } catch (e) {
            reviewsData = { reviews: [] };
          }
        }

        const newReview = {
          id: Date.now().toString(),
          productId: body.productId,
          userName: body.userName,
          rating: Number(body.rating),
          commentText: body.commentText,
          date: new Date().toLocaleDateString('es-CL')
        };

        reviewsData.reviews.push(newReview);

        fs.writeFile(reviewsPath, JSON.stringify(reviewsData, null, 2), 'utf8', (writeErr) => {
          if (writeErr) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: 'Error al guardar la reseña' }));
          } else {
            res.writeHead(201);
            res.end(JSON.stringify(newReview));
          }
        });
      });
      return;
    }

    // DELETE /api/reviews (Moderate / Delete review)
    if (reqUrl === '/api/reviews' && req.method === 'DELETE') {
      if (!checkAuth(req)) {
        res.writeHead(401);
        res.end(JSON.stringify({ error: 'No autorizado' }));
        return;
      }

      const body = await parseJsonBody(req);
      if (!body || !body.reviewId) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: 'ID de reseña faltante' }));
        return;
      }

      const reviewsPath = path.join(__dirname, 'data', 'reviews.json');
      fs.readFile(reviewsPath, 'utf8', (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify({ error: 'Archivo de reseñas no encontrado' }));
          return;
        }

        let reviewsData = { reviews: [] };
        try {
          reviewsData = JSON.parse(data);
        } catch (e) {
          // invalid json
        }

        const initialLength = reviewsData.reviews.length;
        reviewsData.reviews = reviewsData.reviews.filter(r => r.id !== body.reviewId);

        if (reviewsData.reviews.length === initialLength) {
          res.writeHead(404);
          res.end(JSON.stringify({ error: 'Reseña no encontrada' }));
          return;
        }

        fs.writeFile(reviewsPath, JSON.stringify(reviewsData, null, 2), 'utf8', (writeErr) => {
          if (writeErr) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: 'Error al actualizar reseñas' }));
          } else {
            res.writeHead(200);
            res.end(JSON.stringify({ success: true }));
          }
        });
      });
      return;
    }

    // Default API 404
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Ruta de API no encontrada' }));
    return;
  }

  if (reqUrl === '/') reqUrl = '/index.html';

  let filePath = path.join(__dirname, reqUrl);
  
  // Resolve target path and prevent Directory Traversal
  const safePath = path.resolve(filePath);
  if (!safePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=UTF-8' });
    res.end('403 Forbidden - Acceso denegado');
    return;
  }

  let extname = path.extname(safePath).toLowerCase();

  fs.stat(safePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end('<h1>404 - Página no encontrada</h1><p><a href="/">Volver a BestSushi Coronel</a></p>');
      return;
    }

    const contentType = MIME_TYPES[extname] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'no-referrer-when-downgrade'
    });

    const stream = fs.createReadStream(safePath);
    stream.on('error', (streamErr) => {
      console.error('Error de lectura en archivo:', streamErr.message);
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('500 Internal Server Error');
      }
    });
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`🍣 BestSushi Coronel server running on port ${PORT}`);
});
