--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.4
-- Dumped by pg_dump version 9.5.4

-- Started on 2016-10-29 19:58:32 NZDT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12623)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2414 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 181 (class 1259 OID 16570)
-- Name: letter; Type: TABLE; Schema: public; Owner: task
--

CREATE TABLE letter (
    id integer NOT NULL,
    content character varying,
    sound integer,
    word integer,
    word_index smallint
);


ALTER TABLE letter OWNER TO task;

--
-- TOC entry 182 (class 1259 OID 16576)
-- Name: Letters_ID_seq; Type: SEQUENCE; Schema: public; Owner: task
--

CREATE SEQUENCE "Letters_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Letters_ID_seq" OWNER TO task;

--
-- TOC entry 2415 (class 0 OID 0)
-- Dependencies: 182
-- Name: Letters_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: task
--

ALTER SEQUENCE "Letters_ID_seq" OWNED BY letter.id;


--
-- TOC entry 183 (class 1259 OID 16578)
-- Name: sound; Type: TABLE; Schema: public; Owner: task
--

CREATE TABLE sound (
    id integer NOT NULL,
    label character varying,
    code smallint
);


ALTER TABLE sound OWNER TO task;

--
-- TOC entry 184 (class 1259 OID 16584)
-- Name: Sound_ID_seq; Type: SEQUENCE; Schema: public; Owner: task
--

CREATE SEQUENCE "Sound_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Sound_ID_seq" OWNER TO task;

--
-- TOC entry 2416 (class 0 OID 0)
-- Dependencies: 184
-- Name: Sound_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: task
--

ALTER SEQUENCE "Sound_ID_seq" OWNED BY sound.id;


--
-- TOC entry 185 (class 1259 OID 16586)
-- Name: word; Type: TABLE; Schema: public; Owner: task
--

CREATE TABLE word (
    id integer NOT NULL,
    paragraph integer,
    paragraph_index smallint,
    content character varying
);


ALTER TABLE word OWNER TO task;

--
-- TOC entry 186 (class 1259 OID 16592)
-- Name: Word_ID_seq; Type: SEQUENCE; Schema: public; Owner: task
--

CREATE SEQUENCE "Word_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Word_ID_seq" OWNER TO task;

--
-- TOC entry 2417 (class 0 OID 0)
-- Dependencies: 186
-- Name: Word_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: task
--

ALTER SEQUENCE "Word_ID_seq" OWNED BY word.id;


--
-- TOC entry 187 (class 1259 OID 16594)
-- Name: paragraph; Type: TABLE; Schema: public; Owner: task
--

CREATE TABLE paragraph (
    id integer NOT NULL,
    content text
);


ALTER TABLE paragraph OWNER TO task;

--
-- TOC entry 188 (class 1259 OID 16600)
-- Name: paragraph_id_seq; Type: SEQUENCE; Schema: public; Owner: task
--

CREATE SEQUENCE paragraph_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE paragraph_id_seq OWNER TO task;

--
-- TOC entry 2418 (class 0 OID 0)
-- Dependencies: 188
-- Name: paragraph_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: task
--

ALTER SEQUENCE paragraph_id_seq OWNED BY paragraph.id;


--
-- TOC entry 2269 (class 2604 OID 16602)
-- Name: id; Type: DEFAULT; Schema: public; Owner: task
--

ALTER TABLE ONLY letter ALTER COLUMN id SET DEFAULT nextval('"Letters_ID_seq"'::regclass);


--
-- TOC entry 2272 (class 2604 OID 16603)
-- Name: id; Type: DEFAULT; Schema: public; Owner: task
--

ALTER TABLE ONLY paragraph ALTER COLUMN id SET DEFAULT nextval('paragraph_id_seq'::regclass);


--
-- TOC entry 2270 (class 2604 OID 16604)
-- Name: id; Type: DEFAULT; Schema: public; Owner: task
--

ALTER TABLE ONLY sound ALTER COLUMN id SET DEFAULT nextval('"Sound_ID_seq"'::regclass);


--
-- TOC entry 2271 (class 2604 OID 16605)
-- Name: id; Type: DEFAULT; Schema: public; Owner: task
--

ALTER TABLE ONLY word ALTER COLUMN id SET DEFAULT nextval('"Word_ID_seq"'::regclass);


--
-- TOC entry 2419 (class 0 OID 0)
-- Dependencies: 182
-- Name: Letters_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: task
--

SELECT pg_catalog.setval('"Letters_ID_seq"', 25, true);


--
-- TOC entry 2420 (class 0 OID 0)
-- Dependencies: 184
-- Name: Sound_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: task
--

SELECT pg_catalog.setval('"Sound_ID_seq"', 16, true);


--
-- TOC entry 2421 (class 0 OID 0)
-- Dependencies: 186
-- Name: Word_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: task
--

SELECT pg_catalog.setval('"Word_ID_seq"', 5, true);


--
-- TOC entry 2399 (class 0 OID 16570)
-- Dependencies: 181
-- Data for Name: letter; Type: TABLE DATA; Schema: public; Owner: task
--

COPY letter (id, content, sound, word, word_index) FROM stdin;
2	x	8	1	2
3	(s)	13	1	3
4	p	11	1	4
5	e	2	1	5
6	n	9	1	6
7	s	13	1	7
8	i	3	1	8
9	ve	15	1	9
10	r	12	2	1
11	i	3	2	2
12	ng	10	2	3
13	s	16	2	4
14	o	5	3	1
15	n	9	3	2
16	th	14	4	1
17	i	3	4	2
18	n	9	4	3
19	f	6	5	1
20	i	3	5	2
22	g	7	5	4
23	e	1	5	5
24	r	12	5	6
25	s	16	5	7
21	n	10	5	3
1	e	3	1	1
\.


--
-- TOC entry 2405 (class 0 OID 16594)
-- Dependencies: 187
-- Data for Name: paragraph; Type: TABLE DATA; Schema: public; Owner: task
--

COPY paragraph (id, content) FROM stdin;
1	ex(s)pensive rings on thin fingers
\.


--
-- TOC entry 2422 (class 0 OID 0)
-- Dependencies: 188
-- Name: paragraph_id_seq; Type: SEQUENCE SET; Schema: public; Owner: task
--

SELECT pg_catalog.setval('paragraph_id_seq', 1, true);


--
-- TOC entry 2401 (class 0 OID 16578)
-- Dependencies: 183
-- Data for Name: sound; Type: TABLE DATA; Schema: public; Owner: task
--

COPY sound (id, label, code) FROM stdin;
1	vowel1	1
2	vowel2	2
3	vowel3	3
4	vowel4	4
5	vowel5	5
6	f	-1
7	g	-2
8	k	-3
9	n	-4
10	ng	-5
11	p	-6
12	r	-7
13	s	-8
14	th	-9
15	v	-10
16	z	-11
\.


--
-- TOC entry 2403 (class 0 OID 16586)
-- Dependencies: 185
-- Data for Name: word; Type: TABLE DATA; Schema: public; Owner: task
--

COPY word (id, paragraph, paragraph_index, content) FROM stdin;
1	1	1	ex(s)pensive
2	1	2	rings
3	1	3	on
4	1	4	thin
5	1	5	fingers
\.


--
-- TOC entry 2274 (class 2606 OID 16607)
-- Name: letter_pkey; Type: CONSTRAINT; Schema: public; Owner: task
--

ALTER TABLE ONLY letter
    ADD CONSTRAINT letter_pkey PRIMARY KEY (id);


--
-- TOC entry 2281 (class 2606 OID 16609)
-- Name: paragraph_pkey; Type: CONSTRAINT; Schema: public; Owner: task
--

ALTER TABLE ONLY paragraph
    ADD CONSTRAINT paragraph_pkey PRIMARY KEY (id);


--
-- TOC entry 2276 (class 2606 OID 16611)
-- Name: sound_pkey; Type: CONSTRAINT; Schema: public; Owner: task
--

ALTER TABLE ONLY sound
    ADD CONSTRAINT sound_pkey PRIMARY KEY (id);


--
-- TOC entry 2279 (class 2606 OID 16613)
-- Name: word_pkey; Type: CONSTRAINT; Schema: public; Owner: task
--

ALTER TABLE ONLY word
    ADD CONSTRAINT word_pkey PRIMARY KEY (id);


--
-- TOC entry 2277 (class 1259 OID 16614)
-- Name: fki_word_paragraph_fkey; Type: INDEX; Schema: public; Owner: task
--

CREATE INDEX fki_word_paragraph_fkey ON word USING btree (paragraph);


--
-- TOC entry 2282 (class 2606 OID 16615)
-- Name: letter_sound_fkey; Type: FK CONSTRAINT; Schema: public; Owner: task
--

ALTER TABLE ONLY letter
    ADD CONSTRAINT letter_sound_fkey FOREIGN KEY (sound) REFERENCES sound(id);


--
-- TOC entry 2283 (class 2606 OID 16620)
-- Name: letter_word_fkey; Type: FK CONSTRAINT; Schema: public; Owner: task
--

ALTER TABLE ONLY letter
    ADD CONSTRAINT letter_word_fkey FOREIGN KEY (word) REFERENCES word(id);


--
-- TOC entry 2284 (class 2606 OID 16625)
-- Name: word_paragraph_fkey; Type: FK CONSTRAINT; Schema: public; Owner: task
--

ALTER TABLE ONLY word
    ADD CONSTRAINT word_paragraph_fkey FOREIGN KEY (paragraph) REFERENCES paragraph(id);


--
-- TOC entry 2413 (class 0 OID 0)
-- Dependencies: 7
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2016-10-29 19:58:32 NZDT

--
-- PostgreSQL database dump complete
--

