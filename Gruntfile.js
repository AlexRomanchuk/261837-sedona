"use strict";

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "source",
          src: [
            "fonts/**/*.{woff,woff2}",
            "img/**/logo-*.svg",
            "img/**/bg-*.svg",
            "img/**/text-*.svg",
            "js/**/*.js"
          ],
          dest: "build"
        }]
      }
    },

    clean: {
      build: ["build"]
    },

    less: {
      style: {
        files: {
          "build/css/style.css": "source/less/style.less"
        }
      }
    },

    posthtml: {
      options: {
        use: [
          require("posthtml-include")()
        ]
      },
      html: {
        files: [{
          expand: true,
          cwd: "source",
          src: ["*.html"],
          dest: "build"
        }]
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")()
          ]
        },
        src: "build/css/*.css"
      }
    },

    svgstore: {
      options: {
        cleanup: ["fill"],
        includeTitleElement: false
      },
      sprite: {
        files: {
          "build/img/sprite.svg": ["source/img/icon-*.svg"],
          "build/img/html-sprite.svg": ["source/img/htmlacademy.svg"]
        }
      }
    },

    cwebp: {
      dynamic: {
        options: {
          q: 80
        },
        files: [{
          expand: true,
          cwd: "build/",
          src: ["img/**/*.{png,jpg,gif}"],
          dest: "build/"
        }]
      }
    },

    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 3,
        },
        files: [{
          expand: true,
          cwd: "source/",
          src: ["img/**/*.{png,jpg,gif}"],
          dest: "build/"
        }]
      }
    },

    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "build/*.html",
            "build/css/*.css"
          ]
        },
        options: {
          server: "build/",
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      }
    },

    watch: {
      html: {
        files: ["source/*.html"],
        tasks: ["posthtml"]
      },
      style: {
        files: ["source/less/**/*.less"],
        tasks: ["less", "postcss", "csso"]
      }
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);

  grunt.registerTask("build", [
    "clean",
    "copy",
    "less",
    "postcss",
    "csso",
    "svgstore",
    "posthtml",
    "imagemin",
    "cwebp"
  ]);
};
