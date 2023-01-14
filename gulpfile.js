// compilar Sass

const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

function css(done) {
  // identificar archivo scss, luego compilarlo y por ultimo guardar el .css
  src("src/scss/app.scss")
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(dest("build/css"));

  done(); // indica que aqui acaba la tarea
}

// Watch

function dev() {
  //watch("ruta archivo que queremos que escuche", función a ejecutar si se produjo un cambio en el archivo);
  watch("src/scss/**/*.scss", css); //usamos un comodin para que busque todos los archivos .scss
}

// exports.nombreParaLlamarTarea = nombreFuncion;
exports.css = css; //usamos exports para que sea ejecutable por Gulp
exports.dev = dev;

exports.default = series(css, dev);
//exports.default = parallel(css, dev);
