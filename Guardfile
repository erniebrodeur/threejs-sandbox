#!/usr/bin/ruby

guard :bundler do
	watch 'Gemfile'
	watch '*.gemspec'
end

# guard :yard do
#   watch(%r{^lib/(.+)\.rb$})
# end

guard 'livereload' do
  watch(%r{public/.+\.(css|js|html)})
end
