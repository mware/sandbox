<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package sandbox
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'sandbox' ); ?></a>

	<	<header id="masthead" class="site-header">
		<div class="container">
			<div class="header__logo-nav-wrap flex-container bottom nowrap">
				<div class="site-branding">
					<?php
					the_custom_logo();
					if ( is_front_page() && is_home() ) :
						?>
						<h1 class="site-title visuallyhidden"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
						<?php
					else :
						?>
						<p class="site-title visuallyhidden"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
						<?php
					endif;
					$fifco_description = get_bloginfo( 'description', 'display' );
					if ( $fifco_description || is_customize_preview() ) :
						?>
						<p class="site-description visuallyhidden"><?php echo $fifco_description; /* WPCS: xss ok. */ ?></p>
					<?php endif; ?>
				</div><!-- .site-branding -->

				<nav id="site-navigation" class="main-navigation">
					
					<button class="menu-toggle hamburger hamburger--spin" type="button" aria-controls="primary-menu" aria-expanded="false">
						<span class="hamburger-box">
								<span class="hamburger-inner"></span>
						</span>
					</button>
					<?php
			$divider_html = '<a href="/"> <img src="https://www.bayflatslodge.com/wp-content/uploads/2017/10/bayflat-fund-1.png" /></a>';

			wp_nav_menu( array(
				'theme_location' => 'menu-1',
				'menu_id'        => 'primary-menu',
				'divider_html'   => $divider_html
			) );
			?>
					
				</nav><!-- #site-navigation -->
				<div class="search-icon">
					<button class="search-button-trigger non-button">
						<?php include ('assets/img/icon-search.svg'); ?>
					</button>
				</div>
			</div>
		</div> <!-- /container -->
		<section class="search-section" id="search-section">
			<div class="container">
				<div class="search-section__form-wrap">
					<form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>">
						<label>
							<span class="screen-reader-text">Search for:</span>
							<input type="search" class="search-field" placeholder="Search …" value="" name="s" title="Search for:" />
						</label>
						<input type="submit" class="search-submit" value="Search" />
					</form>
				</div>
			</div>
		</section> 
	</header><!-- #masthead -->

	<div id="content" class="site-content">
