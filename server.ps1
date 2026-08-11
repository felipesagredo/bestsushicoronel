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
