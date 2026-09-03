import React from "react";
import { blogs } from "../../Data/BlogPostData";

const BlogPostSection = () => {
  return (
    <div className="section">
        <div className="hero-container">
            <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5">
                <div className="col col-lg-4 order-2 order-lg-1">
                    <div className="d-flex flex-column flex-md-row flex-lg-column gspace-5">
                        <div className="card recent-post">
                            <h4>ბოლო სტატიები</h4>
                            {blogs.map((blog) => (
                                <div
                                    className="d-flex flex-row w-100 gspace-1"
                                    key={blog.id}
                                >
                                    <div className="image-container">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="img-fluid"  loading="lazy" decoding="async" />
                                    </div>
                                    <div className="d-grid">
                                        <div className="d-flex flex-row gspace-1 align-items-center">
                                            <i className="fa-solid fa-calendar accent-color"></i>
                                            <span className="meta-data-post">{blog.date}</span>
                                        </div>
                                        <a href={blog.link} className="blog-link-post">
                                            {blog.title}
                                        </a>
                                    </div>
                                </div>
                                ))}
                        </div>
                        <div className="cta-service-banner">
                            <div className="spacer"></div>
                            <h3 className="title-heading">აიყვანე ბიზნესი ახალ საფეხურზე!</h3>
                            <p>
                                შენი იდეა. ჩვენი ტექნოლოგია. ერთად — ციფრული მომავალი. მოგვწერე და დაიწყე შენი ვებსაიტის შექმნა.
                            </p>
                            <div className="link-wrapper">
                                <a href="about">ვრცლად</a>
                                <i className="fa-solid fa-circle-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-8 order-1 order-lg-2">
                    <div className="d-flex flex-column gspace-2">
                        <div className="post-image">
                            <img
                            src="/assets/novatech/img/post-hero.webp"
                            alt="სტატია"
                            className="img-fluid"  loading="lazy" decoding="async" />
                        </div>
                        <h3>რატომ სჭირდება ბიზნესს ვებსაიტი?</h3>
                        <div className="underline-muted-full"></div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                            <div className="d-flex flex-row align-items-center gspace-2">
                                <div className="d-flex flex-row gspace-1 align-items-center">
                                    <i className="fa-solid fa-calendar accent-color"></i>
                                    <span className="meta-data-post">27 მარტი, 2025</span>
                                </div>
                                <div className="d-flex flex-row gspace-1 align-items-center">
                                    <i className="fa-solid fa-folder accent-color"></i>
                                    <span className="meta-data-post">SEO</span>
                                </div>
                            </div>
                            <div className="d-flex flex-row gspace-1 align-items-center">
                                <i className="fa-solid fa-user accent-color"></i>
                                <span className="meta-data">NOVATECH</span>
                            </div>
                        </div>

                    <div>
                        <p>
                            დღეს ვებსაიტი ბიზნესის ერთ-ერთი მთავარი ციფრული ინსტრუმენტია. ის მუშაობს 24/7 და მომხმარებელს საშუალებას აძლევს
                            ნებისმიერ დროს გაიგოს შენი სერვისების, პროდუქტებისა და ბიზნესის შესახებ. სწორად შექმნილი ვებსაიტი ზრდის ნდობას
                            და აჩვენებს, რომ შენი ბიზნესი თანამედროვე სტანდარტებს მიყვება.
                        </p>
                        <p>
                            უნიკალური ვიზუალური სტილი და კარგად დაგეგმილი ვებსაიტი ეხმარება ბრენდს გამოირჩეოდეს კონკურენტებისგან.
                            SEO-სა და სწორი სტრუქტურის დახმარებით შენი ბიზნესი შეიძლება იმ მომხმარებლებამდეც მივიდეს, რომლებიც ჯერ არ გიცნობენ.
                            ვებსაიტი ასევე ქმნის საფუძველს ონლაინ გაყიდვებისთვის, შეკვეთებისთვის, დაჯავშნისთვის და სხვა ციფრული სერვისებისთვის.
                            სწორედ ამიტომ ვებსაიტი ხარჯი არ არის — ეს არის ინვესტიცია შენი ბიზნესის ციფრულ განვითარებაში.
                        </p>
                    </div>
                    <div className="quote-container">
                        <div>
                        <div className="icon-wrapper">
                            <div className="icon-box">
                            <i className="fa-solid fa-quote-right"></i>
                            </div>
                        </div>
                        </div>
                        <p className="quote">
                            პირველი შთაბეჭდილება ონლაინ იწყება. დროა, შენი ონლაინ სივრცე ისეთივე ძლიერი იყოს, როგორიც შენი ბიზნესია.
                        </p>
                        <div>
                        <h5>NOVATECH</h5>
                        <p className="quote-description">ციფრული სააგენტო</p>
                        </div>
                    </div>
                    <p>
                        თანამედროვე ვებსაიტი აძლიერებს ბრენდს, მუშაობს ყველა მოწყობილობაზე და გეხმარება მეტი მომხმარებლის მოზიდვაში.
                        NOVATECH-ში ვქმნით ციფრულ გამოცდილებას, რომელიც ანვითარებს ბიზნესს. მოგვწერე და ერთად დავიწყოთ შენი ბიზნესის
                        ონლაინ განვითარება.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BlogPostSection;