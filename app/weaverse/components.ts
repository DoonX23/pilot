import type { HydrogenComponent } from '@weaverse/hydrogen';
import * as HeaderImage from '~/sections/HeaderImage/HeaderImage';
import * as ImageGallery from '~/sections/ImageGallery';
import * as ImageGalleryItem from '~/sections/ImageGallery/image';
import * as ImageGalleryItems from '~/sections/ImageGallery/items';
import * as ContentItems from '~/sections/ImageWithText/Content';
import * as ImageItems from '~/sections/ImageWithText/Image';
import * as ImageWithText from '~/sections/ImageWithText/ImageWithText';
import * as ButtonPromotionItems from '~/sections/PromotionGrid/ButtonItems';
import * as PromotionGrid from '~/sections/PromotionGrid/PromotionGrid';
import * as PromotionGridItem from '~/sections/PromotionGrid/item';
import * as RichText from '~/sections/RichText/RichText';
import * as VideoItem from '~/sections/Video/VideoItem';
import * as Video from '~/sections/Video/video';
import * as VideoWithText from '~/sections/VideoWithText/VideoWithText';
import * as AllProducts from '~/sections/all-products';
import * as BlogPost from '~/sections/blog-post';
import * as Blogs from '~/sections/blogs';
import * as CollectionFilters from '~/sections/collection-filters';
import * as CollectionHeader from '~/sections/collection-header';
import * as CollectionList from '~/sections/collection-list';
import * as ContentColumnWithImage from '~/sections/column-with-image/index';
import * as ContentColumnItem from '~/sections/column-with-image/item';
import * as Countdown from '~/sections/countdown';
import * as CountdownActions from '~/sections/countdown/actions';
import * as CountDownTimer from '~/sections/countdown/timer';
import * as FeaturedCollections from '~/sections/featured-collections';
import * as FeaturedProducts from '~/sections/featured-products';
import * as Hero from '~/sections/hero';
import * as Judgeme from '~/sections/judgeme-review';
import * as Map from '~/sections/map';
import * as Page from '~/sections/page';
import * as ProductInformation from '~/sections/product-information';
import * as RelatedArticles from '~/sections/related-articles';
import * as RelatedProducts from '~/sections/related-products';
import { atoms } from '~/sections/shared/atoms';
import * as SingleProduct from '~/sections/single-product';
import * as Testimonial from '~/sections/testimonials';
import * as TestimonialItem from '~/sections/testimonials/item';
import * as TestimonialItems from '~/sections/testimonials/items';

export let components: HydrogenComponent[] = [
  ...atoms,
  Hero,
  Page,
  Video,
  VideoItem,
  CollectionHeader,
  HeaderImage,
  ImageWithText,
  ContentItems,
  ImageItems,
  ContentColumnWithImage,
  ContentColumnItem,
  RichText,
  VideoWithText,
  Map,
  PromotionGrid,
  PromotionGridItem,
  ButtonPromotionItems,
  Countdown,
  CountDownTimer,
  CountdownActions,
  Blogs,
  BlogPost,
  AllProducts,
  FeaturedProducts,
  FeaturedCollections,
  Testimonial,
  TestimonialItems,
  TestimonialItem,
  ImageGallery,
  ImageGalleryItems,
  ImageGalleryItem,
  ProductInformation,
  RelatedProducts,
  RelatedArticles,
  CollectionFilters,
  CollectionList,
  SingleProduct,
  Judgeme,
];
