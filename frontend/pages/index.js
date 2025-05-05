import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Rating,
  Chip,
  Avatar,
  Link,
  InputAdornment,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from 'next/image'; // Import the Image component

const tagImageMap = [
  { name: 'Rice', imageUrl: '/Images/Gemini_Generated_Image_xj16r0xj16r0xj16.jpeg' },
  { name: 'Pizza', imageUrl: '/Images/Gemini_Generated_Image_3jas313jas313jas.jpeg' },
  { name: 'Spaghetti', imageUrl: '/Images/Gemini_Generated_Image_wfnsppwfnsppwfns.jpeg' },
  { name: 'Chicken', imageUrl: '/Images/Gemini_Generated_Image_bc26tabc26tabc26.jpeg' },
  { name: 'juice', imageUrl: '/Images/Gemini_Generated_Image_2waoua2waoua2wao.jpeg' },
  { name: 'ice_cream', imageUrl: '/Images/Gemini_Generated_Image_eh27xyeh27xyeh27.jpeg' },
  { name: 'fries', imageUrl: '/Images/Gemini_Generated_Image_l16jkal16jkal16j.jpeg' },
  { name: 'doughnuts', imageUrl: '/Images/Gemini_Generated_Image_91ggh891ggh891gg.jpeg' },
  { name: 'burgers', imageUrl: '/Images/Gemini_Generated_Image_a8p7lwa8p7lwa8p7.jpeg' },
  { name: 'soup', imageUrl: '/images/rice.png' },
  { name: 'beans', imageUrl: '/images/beans.png' },
  { name: 'african', imageUrl: '/images/african-icon.png' },
  { name: 'continental', imageUrl: '/images/continental-icon.png' },
];


const banners = [
  {
    imageUrl: '/Images/Frame 1599.png_1700910292928',
    altText: 'New Arrivals',
    linkUrl: '/new',
    width: 400,
    height: 200
  },
  {
    imageUrl: '/Images/Frame 1601.png_1700910656254',
    altText: 'Featured Restaurants',
    linkUrl: '/featured',
     width: 400,
    height: 200
  },
  {
    imageUrl: '/Images/FREE DELIVERY APR23 (1).png_1745411888046',
    altText: 'Free Delivery',
    linkUrl: '/free',
     width: 400,
    height: 200
  },
];

function Header() {
  return (
    <AppBar position="static" color="default" elevation={1} sx={{ borderBottom: '1px solid lightgrey' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          <Link href="#" variant="body2" sx={{ mr: 2 }}>
            Sell on HeyFood
          </Link>
          <Select value="en" size="small" sx={{ mr: 2 }}>
            <MenuItem value="en">English</MenuItem>
          </Select>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: 1200, mx: 'auto', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            HeyFood
          </Typography>
          <InputBase
            placeholder="Enter your delivery address"
            startAdornment={<InputAdornment position="start">
              <LocationOnIcon />
            </InputAdornment>}
            sx={{ ml: 2, flexGrow: 1, maxWidth: 300 }}
          />

          <IconButton sx={{ ml: 2 }}>
            <ShoppingCartIcon />
          </IconButton>
          <Box sx={{ ml: 2 }}>
            <Button variant="outlined" color="primary" sx={{ mr: 1 }}>
              Login
            </Button>
            <Button variant="contained" color="primary">
              Signup
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.200', py: 4, borderBottom: '1px solid lightgrey', pb: 2 }}>
      <Box maxWidth={1200} mx="auto" px={2}>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Get the HeyFood app
          </Typography>
          <Link href="#" sx={{ mr: 2 }}>
            <img src="/app-store-badge.png" alt="App Store" height={40}  />
          </Link>
          <Link href="#">
            <img src="/google-play-badge.png" alt="Google Play" height={40} />
          </Link>
        </Box>

        <Grid container spacing={4} justifyContent="space-around" sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" gutterBottom>
              HeyFood
            </Typography>
            <Link href="#" display="block" color="text.secondary" sx={{ mb: 1 }}>
              About Us
            </Link>
            <Link href="#" display="block" color="text.secondary" sx={{ mb: 1 }}>
              Contact Us
            </Link>
            <Link href="#" display="block" color="text.secondary" sx={{ mb: 1 }}>
              Careers
            </Link>
            <Link href="#" display="block" color="text.secondary" sx={{ mb: 1 }}>
              Blog
            </Link>
            <Link href="#" display="block" color="text.secondary" sx={{ mb: 1 }}>
              Terms & Conditions
            </Link>
            <Link href="#" display="block" color="text.secondary">
              Privacy Policy
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" gutterBottom>
              For Restaurants
            </Typography>
            <Link href="#" display="block" color="text.secondary" sx={{ mb: 1 }}>
              Partner with Us
            </Link>
            <Link href="#" display="block" color="text.secondary" sx={{ mb: 1 }}>
              Restaurant Portal
            </Link>
            <Link href="#" display="block" color="text.secondary">
              Pricing
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" gutterBottom>
              More
            </Typography>
            <Link href="#" display="block" color="text.secondary" sx={{ mb: 1 }}>
              FAQ
            </Link>
            <Link href="#" display="block" color="text.secondary">
              Sitemap
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" gutterBottom>
              Follow Us
            </Typography>
            <IconButton href="#" sx={{ mr: 1 }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" sx={{ mr: 1 }}>
              <InstagramIcon />
            </IconButton>
            <IconButton href="#">
              <TwitterIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            Payment Methods
          </Typography>
          {/* Add your payment method icons here */}
        </Box>

        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} HeyFood. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [tags, setTags] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [loadingTags, setLoadingTags] = useState(true);
  const [tagsError, setTagsError] = useState(null);
  const [loadingRestaurants, setLoadingRestaurants] = useState(true);
  const [restaurantsError, setRestaurantsError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      setLoadingRestaurants(true);
      setRestaurantsError(null);
      try {
        const response = await fetch('http://localhost:5000/api/restaurants');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
        setRestaurantsError(error.message);
      } finally {
        setLoadingRestaurants(false);
      }
    };

    fetchRestaurants();
  }, []);

  const categories = [
    { name: 'Jollof Specials', tags: ['Jollof rice', 'rice'] },
    { name: 'Great Discounts', tags: ['discount', 'offer', 'promotion'] },
    { name: 'Refreshing Drinks', tags: ['Juice', 'smoothie', 'wine', 'yoghurt', 'drinks'] },
    { name: 'Other Delights', tags: [] },
  ];

  // Function to filter restaurants by category
    const filterRestaurantsByCategory = (category) => {
        if (category.tags.length === 0) {
            return restaurants.filter(restaurant =>
                !categories.slice(0, -1).some(cat =>
                    restaurant.tags.some(tag => cat.tags.includes(tag.toLowerCase()))
                )
            );
        }
        return restaurants.filter(restaurant =>
            restaurant.tags.some(tag => category.tags.includes(tag.toLowerCase()))
        );
    };

  useEffect(() => {
    const fetchTags = async () => {
      setLoadingTags(true);
      setTagsError(null);
      try {
        const response = await fetch('http://localhost:5000/api/tags');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAvailableTags(data.map(tag => ({ name: tag })));
      } catch (error) {
        console.error('Error fetching tags:', error);
        setTagsError(error.message);
      } finally {
        setLoadingTags(false);
      }
    };

    fetchTags();
  }, []);

  useEffect(() => {
    const fetchFilteredRestaurants = async () => {
      let apiUrl = 'http://localhost:5000/api/restaurants?';
      if (searchTerm) apiUrl += `search=${searchTerm}&`;
      if (sortBy) apiUrl += `sort=${sortBy}&`;
      if (tags.length > 0) apiUrl += `tags=${tags.join(',')}&`;
      apiUrl = apiUrl.replace(/&$/, '');

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error fetching restaurants:', errorData);
          setRestaurants([]);
          return;
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setRestaurants(data);
        } else {
          console.error('API did not return an array for filtered restaurants:', data);
          setRestaurants([]);
        }
      } catch (error) {
        console.error('Error fetching filtered restaurants:', error);
        setRestaurants([]);
      }
    };

    fetchFilteredRestaurants();
  }, [searchTerm, sortBy, tags]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleTagClick = (tag) => {
    setTags([tag]);
    setSelectedTab(availableTags.findIndex(t => t.name === tag));
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    if (availableTags[newValue]) {
      setTags([availableTags[newValue].name]);
    } else {
      setTags([]);
    }
  };


  return (
    <div>
      <Head>
        <title>Restaurant Clone</title>
        <meta name="description" content="A clone of the restaurant tab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container maxWidth={false} sx={{ mt: 2, px: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <InputBase
            placeholder="Search for restaurants..."
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ ml: 1, flex: 1 }}
            startAdornment={<SearchIcon />}
          />
        </Box>

        {/* Tag Tabs */}
        <Box sx={{ mb: 2, overflowX: 'auto' }}>
          {loadingTags ? (
            <Typography>Loading tags...</Typography>
          ) : tagsError ? (
            <Typography color="error">Error loading tags: {tagsError}</Typography>
          ) : (
            <Tabs value={selectedTab} onChange={handleTabChange} aria-label="restaurant categories" variant="scrollable" scrollButtons="auto">
              {availableTags.map((tagObject) => (
                <Tab
                  key={tagObject.name}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {tagImageMap[tagObject.name] && (
                        <Avatar
                          src={tagImageMap[tagObject.name]}
                          alt={tagObject.name}
                          sx={{ width: 24, height: 24, mr: 1 }}
                        />
                      )}
                      {tagObject.name}
                    </Box>
                  }
                  onClick={() => handleTagClick(tagObject.name)}
                  sx={{ '&.Mui-selected': { color: 'primary.main' } }}
                />
              ))}
            </Tabs>
          )}
        </Box>

        <Box sx={{ mt: 2, mb: 2, overflowX: 'auto' }}>
          <Grid container spacing={2} sx={{ flexWrap: 'nowrap' }}>
            {banners.map((banner, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  onClick={() => banner.linkUrl && (window.location.href = banner.linkUrl)}
                  sx={{ cursor: banner.linkUrl ? 'pointer' : 'default' }}
                >
                  <Image
                    src={banner.imageUrl}
                    alt={banner.altText}
                    width={banner.width}
                    height={banner.height}

                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="sort-label">Sort By</InputLabel>
            <Select
              labelId="sort-label"
              id="sort"
              value={sortBy}
              onChange={handleSortChange}
              label="Sort By"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="highest_rated">Top Rated</MenuItem>
              <MenuItem value="newest">Newest</MenuItem>
              <MenuItem value="most_rated">Most Popular</MenuItem>
              <MenuItem value="most_popular">Trending</MenuItem>
              <MenuItem value="tags">A - Z (Tags)</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Container maxWidth="xl" sx={{ mt: 2 }}>
          {loadingRestaurants ? (
            <Typography>Loading restaurants...</Typography>
          ) : restaurantsError ? (
            <Typography color="error">
              Error loading restaurants: {restaurantsError}
            </Typography>
          ) : (
            categories.map((category) => (
              <Box key={category.name} sx={{ mb: 4, borderBottom: '1px solid lightgrey', pb: 2 }}>
                <Typography variant="h5" gutterBottom>
                  {category.name}
                </Typography>
                <Grid container spacing={2}>
                  {filterRestaurantsByCategory(category).map((restaurant) => (
                    <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                      <Card>
                        <CardMedia
                          component="div"
                        >
                          <Image
                            src={restaurant.image_url || '/placeholder.png'}
                            alt={restaurant.name}
                             width={300}
                            height={140}

                          />
                        </CardMedia>
                        <CardContent>
                          <Typography variant="h6" component="div">
                            {restaurant.name}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <Rating
                              name={`rating-${restaurant.id}`}
                              value={restaurant.rating}
                              readOnly
                              precision={0.5}
                            />
                            <Typography sx={{ ml: 1 }} color="textSecondary">
                              ({restaurant.rating_count})
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="textSecondary">
                            Cuisine: {restaurant.cuisine}
                          </Typography>
                          {restaurant.tags && restaurant.tags.length > 0 && (
                            <Typography variant="body2" color="textSecondary">
                              Tags: {restaurant.tags.join(', ')}
                            </Typography>
                          )}
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                  {filterRestaurantsByCategory(category).length === 0 && (
                    <Typography variant="body2" color="textSecondary">
                      No restaurants in this category yet.
                    </Typography>
                  )}
                </Grid>
              </Box>
            ))
          )}
        </Container>

      <Typography variant="h4" gutterBottom component="div">
          All Restaurants
        </Typography>

        <Grid container spacing={2}>
          {restaurants.map((restaurant) => (
            <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
              <Card>
                <CardMedia
                 component="div"
                >
                  <Image
                    src={restaurant.image_url}
                    alt={restaurant.name}
                     width={300}
                    height={140}

                  />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {restaurant.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {restaurant.cuisine}
                  </Typography>
                  <Rating name="read-only" value={parseFloat(restaurant.rating)} readOnly precision={0.1} />
                  <Typography variant="body2" color="text.secondary">
                    ({restaurant.rating_count} ratings)
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    {restaurant.tags && restaurant.tags.map((tag) => (
                      <Chip key={tag} label={tag} size="small" sx={{ mr: 0.5 }} />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <div className="footer-separator"></div>

      <Footer />
    </div>
  );
}

