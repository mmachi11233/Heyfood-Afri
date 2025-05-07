--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: restaurants; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.restaurants (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    cuisine character varying(100),
    tags text[],
    image_url character varying(255),
    rating numeric(2,1),
    rating_count integer,
    delivery_time character varying(50),
    price_range character varying(50),
    location character varying(255),
    open_hours character varying(100),
    promotion text,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    popularity_score integer DEFAULT 0
);


ALTER TABLE public.restaurants OWNER TO postgres;

--
-- Name: restaurants_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.restaurants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.restaurants_id_seq OWNER TO postgres;

--
-- Name: restaurants_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.restaurants_id_seq OWNED BY public.restaurants.id;


--
-- Name: restaurants id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurants ALTER COLUMN id SET DEFAULT nextval('public.restaurants_id_seq'::regclass);


--
-- Data for Name: restaurants; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.restaurants (id, name, cuisine, tags, image_url, rating, rating_count, delivery_time, price_range, location, open_hours, promotion, created_at, updated_at, popularity_score) FROM stdin;
10	T Toast Winery	Drinks	{Wine,Juice}	/images/group_wine_rowycz_1371x600_CPG0l-fsqpSJDmQBF2VSk.jpg	4.7	98	Open	\N	\N	\N	\N	2025-05-01 11:23:29.934144+01	2025-05-01 11:23:29.934144+01	0
11	TopSuccess Bar & lounge	Nigerian	{Juice}	/images/topsuccess banner_1000x438_DexcB95ikX1RYLJg7TPvQ.jpg	5.0	0	Open	\N	\N	\N	\N	2025-05-01 11:23:42.894331+01	2025-05-01 11:23:42.894331+01	0
12	JAF Bakery	Nigerian	{Doughnuts,Pastries}	/images/pngtree-baked-goods-displayed-on-artisanal-paper-a-delicious-food-photograph-for-bakeries-recipe-books-and-shop-banners-photo-image_27972636_718x314_UOF8BO_vCTs8KMQJ7bKGY.jpg	3.9	12	Open	\N	\N	\N	\N	2025-05-01 11:23:55.801559+01	2025-05-01 11:23:55.801559+01	0
13	Creme Fruitte	Nigerian	{Salad}	/images/IMG_6130_554x242_IemQkbRiPTHmtx2aHS9XC.jpg	4.9	32	CLoses at 10:00 PM	\N	\N	\N	\N	2025-05-01 11:24:28.321495+01	2025-05-01 11:24:28.321495+01	0
14	Joacia Bistro & Lounge	Nigerian	{Chicken,"Pounded Yam",Rice}	/images/WhatsApp Image 2025-01-28 at 5_380x166_npplK3m0xvXmX5j8yfGkd.jpg	3.4	24	Closes at 10:00 PM	\N	\N	\N	\N	2025-05-01 11:24:39.176564+01	2025-05-01 11:24:39.176564+01	0
15	Flora Restaurant and Lounge	Nigerian	{Rice,Chicken}	/images/nigerian-food-01-1024x640_500x219_M2xKqESmmeTcCYuDpM29t_500x218_mRUTA-ei1PcgOaWfvrEC0_498x218_AnHlJjaRKanIwBn5x4a4m.jpg	5.0	3	Open	\N	\N	\N	\N	2025-05-01 11:25:14.115994+01	2025-05-01 11:25:14.115994+01	0
16	Zoe cakes and cates	Nigerian	{"Cupcakes ",Pasteries,Rice}	/images/WhatsApp Image 2024-08-28 at 9_1000x437_19PGPSmGmpx3MCvXfWB99.jpg	5.0	1	Not taking orders	\N	\N	\N	\N	2025-05-01 11:25:27.616819+01	2025-05-01 11:25:27.616819+01	0
1	Bahyumms Pizza & Shawarma Lounge	Nigerian	{Pizza,Shawarma,Smoothie}	/images/357bb8cd86dabbaef837e6fb8fd17922_750x327_bjuAF2Ph7kAirVHPy8aB_.jpg	4.2	3	Open	\N	\N	\N	\N	2025-05-01 11:10:17.572045+01	2025-05-01 11:10:17.572045+01	1
2	Amala Skye(Ose Olorun Canteen)	Nigerian	{"Goat Meat","Pounded Yam","Soup Bowl"}	/images/abula_600x262.jpg	4.3	5898	Open	\N	\N	\N	\N	2025-05-01 11:11:54.859357+01	2025-05-01 11:11:54.859357+01	100
3	Ellas Bite	Nigerian	{Shawarma}	/images/ella logo_912x399_ed3mBRtJDMga1X8-8_ix7.jpg	4.4	11	Open	\N	\N	\N	\N	2025-05-01 11:12:15.151697+01	2025-05-01 11:12:15.151697+01	10
4	Habib/Rufaidah Yogurt & Fura	Nigerian	{Yoghurt}	/images/yogofura_739x323_3VPA1y_SQOkX2SA055VkR.jpg	4.7	3	Open	\N	\N	\N	\N	2025-05-01 11:12:39.97365+01	2025-05-01 11:12:39.97365+01	20
5	Item 7 Go Iwo-Road	Nigerian	{"Jollof Rice"}	/images/IMG_5345_500x219_Ak6GKm3RHv44V_MPej9iF_488x213_mkYqZSKKDQOAiRZV7boy6_486x213_VIQFV3IMZl5vN3_hnI5Q5.jpg	4.5	3665	Currently closed	\N	\N	\N	\N	2025-05-01 11:13:11.988661+01	2025-05-01 11:13:11.988661+01	50
6	Jollof Square Sango	Nigerian	{Chicken,Fastfood,Rice}	/images/Jollof Square_banner_300x131_VoC68KFJJdgCwyFrWVaEv.jpg	4.5	5429	Open	\N	\N	\N	\N	2025-05-01 11:14:07.875907+01	2025-05-01 11:14:07.875907+01	60
7	Ille Iyan Bodija	Nigerian	{"Goat Meat","Soup Bowl"}	/images/pounded yam_640x280_6aSzK9fvkyTLWADmf0K9V.jpg	4.4	66	Open	\N	\N	\N	\N	2025-05-01 11:22:40.699545+01	2025-05-01 11:22:40.699545+01	80
8	MunchLunch Cafe	Nigerian	{Chicken,Fastfood,Rice}	/images/528202417317_1000x436_XkBq0X9p9pBeHt3KBS7HI.jpg	3.4	30	Open	\N	\N	\N	\N	2025-05-01 11:22:50.872618+01	2025-05-01 11:22:50.872618+01	70
9	Softlife by Koreola	Nigerian	{Creams,promotion,discount}	/Images/combo 7500_607x266_tC87ONfRq_9YXYrdGi3pk.jpg	3.9	907	Open	\N	\N	\N	10% off on all products	2025-05-01 11:23:16.806379+01	2025-05-01 11:23:16.806379+01	110
\.


--
-- Name: restaurants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.restaurants_id_seq', 16, true);


--
-- Name: restaurants restaurants_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurants
    ADD CONSTRAINT restaurants_pkey PRIMARY KEY (id);


--
-- Name: idx_restaurant_cuisine; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_restaurant_cuisine ON public.restaurants USING btree (cuisine);


--
-- Name: idx_restaurant_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_restaurant_name ON public.restaurants USING btree (name);


--
-- Name: idx_restaurant_tags; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_restaurant_tags ON public.restaurants USING gin (tags);


--
-- PostgreSQL database dump complete
--

