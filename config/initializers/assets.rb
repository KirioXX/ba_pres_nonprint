# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.scss, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )

Rails.application.config.assets.precompile += %w( examples.scss )
Rails.application.config.assets.precompile += %w( examples.css )
Rails.application.config.assets.precompile += %w( examples.js )
Rails.application.config.assets.precompile += %w( custom/main.js )
Rails.application.config.assets.precompile += %w( custom/view.js )
Rails.application.config.assets.precompile += %w( custom/show.js )
Rails.application.config.assets.precompile += %w( anijs/anijs-min.js )
Rails.application.config.assets.precompile += %w( anijs/anijs-helper-dom-min.js )
Rails.application.config.assets.precompile += %w( anijs/anijs-helper-scrollreveal-min.js )
Rails.application.config.assets.precompile += %w( anijs/anijs-jquery-event-system-min.js )
Rails.application.config.assets.precompile += %w( greensock/TweenMax.min.js )
Rails.application.config.assets.precompile += %w( greensock/DrawSVGPlugin.min.js )