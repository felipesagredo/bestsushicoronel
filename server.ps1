$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:8080/')
$listener.Start()
Write-Host 'Server running on http://localhost:8080/'
try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        $localPath = $request.Url.LocalPath.Replace('/', '\')
        if ($localPath -eq '\') { $localPath = '\index.html' }
        $filePath = (Get-Location).Path + $localPath

        # Auto sync images from brain directory if missing in assets
        $brainDir = "C:\Users\felip\.gemini\antigravity-ide\brain\37be390c-dee3-401b-84fc-8d53faf328bf"
        $imgMap = @{
            "sushi_30_piezas_1787288485973.jpg" = "assets\promo_sushi_30.jpg"
            "sushi_40_piezas_1787288504535.jpg" = "assets\promo_sushi_40.jpg"
            "sushi_30_clasica_1787288533229.jpg" = "assets\promo_sushi_30_clasica.jpg"
            "sushi_40_clasica_1787288560555.jpg" = "assets\promo_sushi_40_clasica.jpg"
            "handroll_1x_1787288593038.jpg" = "assets\promo_handroll_1x.jpg"
            "handroll_2x_1787288635782.jpg" = "assets\promo_handroll_2x.jpg"
            "handroll_3x_1787288676406.jpg" = "assets\promo_handroll_3x.jpg"
            "empanada_5x_1787288720106.jpg" = "assets\promo_empanada_5x.jpg"
            "combo_mixto_rey_1787288768360.jpg" = "assets\promo_combos_mixto.jpg"
            "salsa_teriyaki_1787288822030.jpg" = "assets\promo_salsa_teriyaki.jpg"
            "salsas_trio_1787288883541.jpg" = "assets\promo_salsas_trio.jpg"
        }
        foreach ($src in $imgMap.Keys) {
            $srcPath = Join-Path $brainDir $src
            $dstPath = Join-Path (Get-Location).Path $imgMap[$src]
            if ((Test-Path $srcPath) -and (-not (Test-Path $dstPath))) {
                Copy-Item $srcPath $dstPath -Force
            }
        }
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            if ($filePath.EndsWith('.html')) { $response.ContentType = 'text/html; charset=utf-8' }
            elseif ($filePath.EndsWith('.css')) { $response.ContentType = 'text/css' }
            elseif ($filePath.EndsWith('.js')) { $response.ContentType = 'text/javascript' }
            elseif ($filePath.EndsWith('.json')) { $response.ContentType = 'application/json' }
            elseif ($filePath.EndsWith('.png')) { $response.ContentType = 'image/png' }
            elseif ($filePath.EndsWith('.jpg') -or $filePath.EndsWith('.jpeg')) { $response.ContentType = 'image/jpeg' }
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
        }
        $response.OutputStream.Close()
    }
} finally {
    $listener.Stop()
}
