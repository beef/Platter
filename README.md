#  Platter

The spiritual successor to Beefplate, Platter is a starting point for many web projects at [Beef](http://www.wearebeef.co.uk). It is a combination of lots of work by many people, compiled, put together and some parts written / re-written by [Liam Richardson](http://www.discoliam.com) and [Craig Coles](http://www.craigcoles.co.uk).

Platter is far from a finished product, but is aimed at being a neutral start for the variety of projects that we take on (though, we do favor a rails esque asset layout). Platter and its predecessors have been used for apps and sites built in Ruby on Rails, Noodall, Wordpress, Drupal, Magento, Joomla, Middleman, Sinatra as well as Static HTML sites.

## How it works

Simple Bits first, there are some basic static files that get used in all sites.

### index.html
This is where we store our basic layout for a HTML page. We use a lot of our own conventions, and borrow some from HTML5B et al. You no doubt have your own conventions, so feel free to ignore this as you please.

### humans.txt
I'm not 100% sure why we included this, other than I like the [idea of it](http://humanstxt.org/). The Beef standard one is included, so edit / delete as you see fit.

### error.html and 404.html etc
These are just standard error pages we re-skin for sites that don't get a specific error page built for whatever reason. This is separated from the rest of the app so it'll still load successfully if there is an major error, hence the in-line css.


### Assets
We use the Ruby on Rails Asset Pipeline structure for our asset files, as thats what we mostly work in. As you would expect CSS is in ```stylesheets```, JavaScript in ```javascripts```, and Images in ```images```.

#### Stylesheets
Stylesheets is set up to use [SASS](http://sass-lang.com). ```application.css``` acts as a manifest for all the other stylesheets, and thus no code should be written here, only import rules. We use the import method rather than a require so we can separate out variables and mixins. Each partial contains comments that indicate what content should be included. 

##### _normalize.scss

This is the basic normalize stylesheet, with no aditions. It is included first to normalize (see what they did there...) all browsers, improving cross browser development.

##### _settings.scss

A place to store all the variables, mixins and placeholders that you might need, and a good place to import things like Compass styles. Generally anything you don't actually want to get rendered there and then.

##### _typography.scss
This is where all the basic site typography goes. Again, shouldn't really be using classes or ID's here. Also a good place to store your ```@font-face``` rules.

##### _base.scss
This is a SMACSS esque base file, with basic site styles for any HTML elements you plan on using. Again, no classes or ID's should be used here. I have some idea bout using the first 4 sheets listed to sever a basic ie6 / older mobile stylesheet, but not put it into action yet. 

##### _site-layout.scss
Where you start to structure your site. This would include basic layout rules, for the site, and styling for Header, Footer and other consistent site elements. Mostly for content you would find in a layout in Rails, or your header / footer / sidebar files in Wordpress for example.

##### _templates.scss
This is where specific styles for each of the templates or page types on your site. This includes the column structures, page specific elements and anything that isn't across the board. 

##### _articles.scss 
We always find that our blog/news styling is massive, so we moved it out into its own stylesheet. If your site dosn't use articles, or it doesn't deviate massively from your core templates, feel free to ignore and include in your ```_templates.scss```.

##### _modules.scss
This is where we keep styles for site wide components. Some examples include widgets, CMS components, sub navigation etc. Anything that is reusable on multiple pages.

##### _forms.scss
Styling for any forms in the site. We try and layout specific styles first, then do any specific modifiers bellow in the same file. 

##### _media-queries.scss 
We're still working out how to fully integrate Responsive Design into our work flow, so for now we've moved media queries out into a septate file. I suspect these will be moved in-line with time, but for now this suits us best. Some basic device specific MQ's are included, but these are just a guide, breakpoints should be based on when the design actually breaks.

### Common Tasks

The following is a set of common tasks that need to be completed for each project you use Platter on. 

* Update the Year and Site Title Keywords in HTML pages (index/404 etc)
* Update Meta Data
* Update humans.txt
* Create custom local version of [Modernizr](http://modernizr.com/) and update path in index.html
* Add Google Analytics account code
* Update which jQuery version you need, and add a local backup.
* Update url paths for CSS / JS files (dependent on your SASS implementation, asset pipelines etc)
* Remove comments and compress CSS and JS files

##  Inspiration / Starting Points 

We don't necessarily follow all of the following exactly, but they all inspired something within the Platter core.

* [HTML5 Boilerplate](http://html5boilerplate.com)
* [Special Moves - Coding Standards](https://github.com/specialmoves/coding-standards-front-end)
* [normalize.css](http://necolas.github.com/normalize.css/)
* [Sassaparilla](http://sass.fffunction.co/)
* [SMACSS](http://smacss.com/)

## Holler

### Liam Richardson

* http://www.discoliam.com
* [@discoliam](http://twitter.com/discoliam)

### Craig Coles

* http://www.craigcoles.co.uk
* [@craigrcoles](http://twitter.com/craigrcoles)

### Beef

* http://wearebeef.co.uk
* hello@wearebeef.co.uk
* [@wearebeef](http://twitter.com/wearebeef)