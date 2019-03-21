<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package sandbox
 */

?>

	</div><!-- #content -->
</div><!-- #page -->
<footer id="colophon" class="site-footer">
	<div class="site-info">
		<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'sandbox' ) ); ?>">
			<?php
			/* translators: %s: CMS name, i.e. WordPress. */
			printf( esc_html__( 'Proudly powered by %s', 'sandbox' ), 'WordPress' );
			?>
		</a>
		<span class="sep"> | </span>
			<?php
			/* translators: 1: Theme name, 2: Theme author. */
			printf( esc_html__( 'Theme: %1$s by %2$s.', 'sandbox' ), 'sandbox', '<a href="https://www.partisanpixel.com">Michael Ware</a>' );
			?>
	</div><!-- .site-info -->
</footer><!-- #colophon -->


<?php wp_footer(); ?>

</body>
</html>
