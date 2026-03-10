$root = "C:\Users\oleharaldw_o\Downloads\vg1-ikm-website\vg1-ikm"
$port = if ($env:PORT) { $env:PORT } else { "3001" }
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Serving on http://localhost:$port/"
while ($true) {
    $ctx = $listener.GetContext()
    $localPath = $ctx.Request.Url.LocalPath
    if ($localPath -eq "/" -or $localPath -eq "") { $localPath = "/index.html" }
    $filePath = $root + $localPath.Replace("/", "\")
    if (Test-Path $filePath -PathType Leaf) {
        $ext = [System.IO.Path]::GetExtension($filePath)
        $mime = switch ($ext) {
            ".html" { "text/html; charset=utf-8" }
            ".css"  { "text/css" }
            ".js"   { "application/javascript" }
            default { "application/octet-stream" }
        }
        $ctx.Response.ContentType = $mime
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        $ctx.Response.ContentLength64 = $bytes.Length
        $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $ctx.Response.StatusCode = 404
    }
    $ctx.Response.Close()
}
