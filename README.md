## LiveReload + Takana Demo
Clone the repo

```
$ npm install
$ gulp takana
```
Grunt will now watch for any changes to the html and trigger a reload through
LiveReload. This will watch for SCSS changes.

In a separate terminal tab run:
```
$ python -m SimpleHTTPServer
```
Go to http://localhost:8000 in your browser.

The page should automatically reload when you make changes to the HTML and save.
Takana will render any changes to the test.css.scss file.
