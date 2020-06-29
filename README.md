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
