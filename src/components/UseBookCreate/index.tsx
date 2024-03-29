import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useGetApiUsedBooksIsbnIsbn } from '../../API';
import backgroundImage from '../../assets/images/main-slider/about.jpg';
import logoImage from '../../assets/images/logo_dark.png';
import '../UseBookCreate/style.css'; 
import '../../assets/css/bootstrap.css';
import '../../assets/css/style.css';
import '../../assets/css/responsive.css';
import '../../assets/css/color.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'



const AddUsedBook: React.FC = () => {
  const [isbn, setIsbn] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [price, setPrice] = useState<string>('');
  const { data, isLoading, error, refetch } = useGetApiUsedBooksIsbnIsbn(isbn);

  const handleIsbnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch(); 
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };


  const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsbn(event.target.value); // 更新ISBN的值
    refetch();  
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data?.data && image) {
      const formData = new FormData();
      const title = data.data.title ?? "無";
      const kind = data.data.kind ?? "無";
      const description=data.data.description?? "無";
      const authors = data.data.authors ?? ["無"]
      formData.append('image', image);
      formData.append('title', title);
      formData.append('kind', kind);
      formData.append('description', description);
      formData.append('authors', authors.join(','));
      formData.append('price', price);
      
      if (data?.data.publisher) {
        formData.append('publisher', data?.data.publisher);
      }

      // 提交操作
      // await axios.post('/api/usedbooks', formData, { ... });
    }
  };

  return (
    <div>

    <div className="grid-line">
        <span className="line-one"></span>
        <span className="line-two"></span>
        <span className="line-three"></span>
        <span className="line-four"></span>
    </div>   




    {/* header */}
    <header className="main-header header-style-one style-two">
    <div className="header-top">
    <div className="auto-container">
      <div className="wrapper-box box-style-one">
        <div className="left-column">
          <div className="logo-box logoSize ">
            <a href="index.html"><img style={{width:'178px', height:'auto'}} src={logoImage}  alt="Logo" /></a>
          </div>
        </div>
        <div className="right-column box-style-two">
          <div className="login"><a href="#">Login</a></div>
          <ul className="social-icon box-style-two">
            <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
            {/* Other social links */}
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="header-divider" style={{ height: '3px', backgroundColor: '#be9a78' }}></div>
     
     
        {/* <div className="header-upper">
            <div className="auto-container">
                <div className="inner-container">
                    
                    
                    <div className="nav-outer">
                        
                        <div className="mobile-nav-toggler"><img src="assets/images/icons/icon-bar.png" alt=""/></div>

                       
                        <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <ul className="navigation">
                                <li className="dropdown"><a href="index.html">Home</a>
                                    <ul>
                                        <li><a href="index.html">Home One</a></li>
                                        <li><a href="index-2.html">Home Two</a></li>
                                        <li><a href="index-3.html">Home Three</a></li>
                                    </ul>
                                </li>
                                <li><a href="about.html">About Us </a></li>
                                <li className="dropdown"><a href="#">Rooms</a>
                                    <ul>
                                        <li><a href="room-grid.html">Room Grid Style</a>
                                        </li>
                                        <li><a href="room-list.html">Room List Style</a></li>
                                        <li><a href="room-details.html">Room Details</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Pages</a>
                                    <ul>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="restaurant.html">Restaurant</a></li>
                                        <li><a href="gallery.html">Gallery</a></li>
                                        <li><a href="offers.html">Offers</a></li>
                                        <li><a href="menu.html">Menu</a></li>
                                        <li><a href="places.html">Places</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Blog</a>
                                    <ul>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                            </div>
                        </nav>                        
                    </div>
                    <div className="right-column">
                        <div className="search-toggler"><i className="far fa-search"></i></div>
                        <div className="menu-bar sidemenu-nav-toggler"><img src="assets/images/icons/icon-bar3.png" alt=""/></div>
                    </div>                     
                </div>
            </div>
        </div> */}
      

     
        <div className="sticky-header">
            <div className="header-upper">
                <div className="auto-container">
                    <div className="inner-container">
                        
                        
                        <div className="nav-outer">
                            
                            <div className="mobile-nav-toggler"><img src="assets/images/icons/icon-bar.png" alt=""/></div>
    

                            <nav className="main-menu navbar-expand-md navbar-light">
                            </nav>                        
                        </div>
                        <div className="right-column">
                        <div className="search-toggler"><i className="far fa-search"></i></div>
                        <div className="menu-bar sidemenu-nav-toggler"><img src="assets/images/icons/icon-bar3.png" alt=""/></div>
                    </div>                     
                    </div>
                </div>
            </div>
        </div>
  </header>



      {/* 背景圖片和標題 */}
    
      <section className="page-title" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="">
          <div className="content-box">
            <div className="content-wrapper">                    
              <div className="title">
                <h1>     </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* 表單和書籍資訊 */}

      <div className="big-title">Booking</div>
        <div className="check-availability">
        
        <div className="auto-container" >
        
        <div className='sidebar'>
          <div className="sidebar-widget search-box ">

                              <form  method="post" action="contact.html" onSubmit={handleIsbnSubmit} >
                                
                                  <div className="form-group">
                                  <input  placeholder='請輸入書籍ISBN碼' type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
                                      {/* <input type="search" name="search-field" value="" placeholder="請輸入書籍ISBN碼" required=""/> */}
                                      <button type="submit" style={{
                                        display:'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                      }}
                                      >
                                        <FontAwesomeIcon  icon={faSearch} />
                                        </button>
                                      {/* //className=" icon far fa-search " */}
                                  </div>
                              </form>

          </div>
        </div>
        </div>
    </div>
      <div className="container pt--80">
        
          
            {/* <form onSubmit={handleIsbnSubmit}>
              <label>
                ISBN:
                <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
              </label>
              <button type="submit">搜尋書籍</button>
            </form> */}

            {isLoading ? <div>Loading...</div> : error ? <div>{"查無此書"}</div> : null}

            {data?.data && (
              <>
              <div className="">
                    <div className="block-sixteen">
                    <div className="sidebar-title"><h3>書籍資訊</h3></div>
                    
                    <div className="information">
                            <div className="offer-title">{data.data.kind}</div>
                            <div className="offer-title">Book information</div>
                            <h4>{data.data.title}</h4>
                            <div className="text">{data.data.description}</div>
                            <div className="icon"><i className="flaticon-clock"></i><span>{data.data.authors?.join(', ') ?? '無'}</span></div>
                            <div className="icon-two"><i className="flaticon-calendar-1"></i><span>{data.data.publisher}</span></div>
                    </div>
                        <form onSubmit={handleSubmit}>
                        <label>
                          上傳書況圖片：
                          <input
                            type="file"
                            onChange={handleImageUpload}
                          />
                        </label>
                        <label>
                          定價：
                          <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </label>
                        </form>
                        <br/>
                        <a href="contact.html" className=" btn-style-one"><span>確定送出</span></a>
                    </div>
                </div>



                {/* <div>
                  <h2>書籍資訊</h2>
                  <p>書名: {data.data.title}</p>
                  <p>作者: {data.data.authors?.join(', ') ?? '無'}</p>
                  {data.data.publisher && <p>出版社: {data.data.publisher}</p>}
                </div> */}
              </>
            )}
      </div>
    
    
  </div>

  );
};

export default AddUsedBook;
