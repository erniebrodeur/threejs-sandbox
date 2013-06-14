# this has to come first, or settings isn't built up for the bundler call.
require 'sinatra'
require 'bundler'
Bundler.require(:default, settings.environment)

