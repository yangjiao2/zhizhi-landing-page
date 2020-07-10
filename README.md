### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### deploy to cPanel

Edit the file and insert the following boilerplate information:

1. `npm run-script build`

2. `serve -s build` double check in local

3. upload compressed files from build folder

4. add file `.htaccess`

```c
<IfModule mod_rewrite.c>

RewriteEngine On
RewriteBase /
RewriteRule ^index\.html\$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]

</IfModule>
```

### 开发 log

1. horizontal scroll

The white-space Method

```
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  .card {
    display: inline-block;
  }
}
```

The Flexbox Method

```
.scrolling-wrapper-flexbox {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  .card {
    flex: 0 0 auto;
  }
}
```

去掉边框

```
.scrolling-wrapper {
-webkit-overflow-scrolling: touch;
}
```

2. 粗暴自适应布局

````
    <script>
      !(function (e) {
        function t(a) {
          if (i[a]) return i[a].exports;
          var n = (i[a] = { exports: {}, id: a, loaded: !1 });
          return (
            e[a].call(n.exports, n, n.exports, t), (n.loaded = !0), n.exports
          );
        }
        var i = {};
        return (t.m = e), (t.c = i), (t.p = ""), t(0);
      })([
        function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = window;
          (t["default"] = i.flex = function (normal, e, t) {
            var a = e || 100,
              n = t || 1,
              r = i.document,
              o = navigator.userAgent,
              d = o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),
              l = o.match(/U3\/((\d+|\.){5,})/i),
              c = l && parseInt(l[1].split(".").join(""), 10) >= 80,
              p = navigator.appVersion.match(/(iphone|ipad|ipod)/gi),
              s = i.devicePixelRatio || 1;
            p || (d && d[1] > 534) || c || (s = 1);
            var u = normal ? 1 : 1 / s,
              m = r.querySelector('meta[name="viewport"]');
            m ||
              ((m = r.createElement("meta")),
              m.setAttribute("name", "viewport"),
              r.head.appendChild(m)),
              m.setAttribute(
                "content",
                "width=device-width,user-scalable=no,initial-scale=" +
                  u +
                  ",maximum-scale=" +
                  u +
                  ",minimum-scale=" +
                  u
              ),
              (r.documentElement.style.fontSize = normal
                ? "50px"
                : (a / 2) * s * n + "px");
          }),
            (e.exports = t["default"]);
        },
      ]);
      flex(false, 100, 1);
    </script>
    ```
````

3. ms sql connection

TypeError: (0 , \_tls.createSecureContext) is not a function
