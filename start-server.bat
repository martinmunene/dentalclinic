@echo off
title Deans Dental Local Server
echo ========================================================
echo Starting Deans Dental Local Web Server on Port 8080...
echo Access in browser: http://localhost:8080
echo Press Ctrl+C in this window to stop the server.
echo ========================================================
powershell -NoProfile -ExecutionPolicy Bypass -Command "$port = 8080; $path = (Get-Location).Path; $listener = New-Object System.Net.HttpListener; $listener.Prefixes.Add('http://localhost:' + $port + '/'); $listener.Start(); Write-Host ('Server running at http://localhost:' + $port + '/'); Start-Process ('http://localhost:' + $port + '/'); while ($listener.IsListening) { try { $context = $listener.GetContext(); $req = $context.Request; $res = $context.Response; $rel = $req.Url.LocalPath.TrimStart('/'); if ([string]::IsNullOrEmpty($rel)) { $rel = 'index.html' }; $target = Join-Path $path $rel; if (Test-Path $target -PathType Leaf) { $ext = [System.IO.Path]::GetExtension($target).ToLower(); switch ($ext) { '.html' { $res.ContentType = 'text/html; charset=utf-8' } '.css' { $res.ContentType = 'text/css' } '.js' { $res.ContentType = 'application/javascript' } '.png' { $res.ContentType = 'image/png' } '.jpg' { $res.ContentType = 'image/jpeg' } '.webp' { $res.ContentType = 'image/webp' } '.svg' { $res.ContentType = 'image/svg+xml' } default { $res.ContentType = 'application/octet-stream' } }; $bytes = [System.IO.File]::ReadAllBytes($target); $res.ContentLength64 = $bytes.Length; $res.OutputStream.Write($bytes, 0, $bytes.Length); } else { $res.StatusCode = 404; $buf = [System.Text.Encoding]::UTF8.GetBytes('404 Not Found'); $res.OutputStream.Write($buf, 0, $buf.Length); }; $res.Close(); } catch { } }"
pause

