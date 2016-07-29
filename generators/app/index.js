'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay(
      'Welcome to the extraordinary ' + chalk.red('generator-mdl-browserify') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project package name',
        default: this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your project package description',
        default: ''
      },
      {
        type: 'input',
        name: 'title',
        message: 'Your project title (as displayed in app)',
        default: this.appname
      }
    ] ;

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath('src')
    );
    this.fs.copy(
      this.templatePath('public/fonts'),
      this.destinationPath('public/fonts')
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        name: this.props.name,
        description: this.props.description
      }
    );
    this.fs.copyTpl(
      this.templatePath('public/index.html'),
      this.destinationPath('public/index.html'),
      { title: this.props.title }
    );
  },

  install: function () {
    this.installDependencies();
  },
});
