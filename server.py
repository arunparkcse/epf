#!/usr/bin/env python3
"""
EPF Angular SPA Server
----------------------
Serves the built Angular app from the dist/ folder.
All unmatched routes return index.html so Angular's
client-side router handles them — no 404 on page refresh.

Usage:
    python server.py          # serves on port 8000
    python server.py 4200     # custom port
"""

import http.server
import socketserver
import os
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
DIST = os.path.join(os.path.dirname(__file__), "dist")


class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIST, **kwargs)

    def do_GET(self):
        # Translate URL path to filesystem path
        url_path = self.path.split("?")[0].split("#")[0]
        fs_path = os.path.join(DIST, url_path.lstrip("/"))

        # If the file does not exist, fall back to index.html
        # (lets Angular's router handle the URL client-side)
        if not os.path.exists(fs_path) or os.path.isdir(fs_path):
            self.path = "/index.html"

        return super().do_GET()

    def log_message(self, format, *args):
        # Cleaner console output
        print(f"  {self.address_string()}  {format % args}")


print(f"\n  EPF Angular — SPA Server")
print(f"  Serving from : {DIST}")
print(f"  Open         : http://localhost:{PORT}\n")

with socketserver.TCPServer(("", PORT), SPAHandler) as httpd:
    httpd.allow_reuse_address = True
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n  Server stopped.")
