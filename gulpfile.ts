import * as gulp from 'gulp'
import * as ts from 'gulp-typescript'
let clean = require('gulp-clean')
import * as tslint from 'gulp-tslint'
import * as path from 'path'
import * as sourcemaps from 'gulp-sourcemaps'
let serverPath = 'server'
let serverCompiled = ['**/*.js', '**/*.js.map', '**/*.d.ts'].map(el => serverPath + el)
let tsProject = ts.createProject('tsconfig.json')
let serverTS = [serverPath + '/**/*.ts']


let tsCompile = () => gulp
  .src(serverTS)
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(tsProject())
  .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: path.join(__dirname, serverPath) }))
  .pipe(gulp.dest(serverPath))

gulp.task('default', ['ts'], function () {
  return gulp.watch(`${serverPath}/**/*.ts`, ['ts-inc'])
})

gulp.task('ts-inc', function () {
  return tsCompile()
})

gulp.task('tslint', () =>
  gulp.src(serverTS)
    .pipe(tslint.default({
      configuration: 'tslint.json'
    }))
    .pipe(tslint.default.report())
)

gulp.task('ts', ['clean'], function () {
  return tsCompile()
})

gulp.task('clean', function () {
  return gulp
    .src(serverCompiled, { read: false })
    .pipe(clean())
})
