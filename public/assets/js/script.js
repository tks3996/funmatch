
    gsap.registerPlugin(ScrollTrigger);
    
    
        TweenLite.set(".text_slide_right", { css: { x: "20%"  } });
        var action = gsap.timeline({defaults: {duration: 1, ease:'none' },
        scrollTrigger: {
            trigger: ".landing_section",
            pin:true,
            scrub: true,
            start: "top top",
            end: "+=1000", 
            markers: true
        }})
            
        .to('.landing_section', { backgroundColor: "unset", delay: -1 })
        .to('.card_games_section', { opacity: "unset", delay: -1 })
        .to('.text_slide_left', {opacity: 0, x: "-200%" })
        .to('.text_slide_right', {opacity: 0, x: "60%", delay: -1 })
        .to('.landing_sec_description', {opacity: 0, x: "20%",delay: -1 })
        .to('.landing_sec_banner', {opacity: 0, x: "150%", delay: -1 })
        .to('.landing_sec_heading', {opacity: 0, y: "-20%", delay: -1})
        .to('.scroll_down_act', {opacity: 0, delay: -0.8})

        .to('.landing_card1', { opacity: 1, scale: 1.5 })
        .to('.landing_card1', { opacity: 1, scale: 1 })

        .to('.landing_card2', { opacity: 1, scale: 1.5 })
        .to('.landing_card2', { opacity: 1, scale: 1 })

        .to('.landing_card3', { opacity: 1, scale: 1.5 })
        .to('.landing_card3', { opacity: 1, scale: 1 })

        .to('.landing_card4', { opacity: 1, scale: 1.5 })
        .to('.landing_card4', { opacity: 1, scale: 1 })
        
        .to('.landing_card', { delay:1, opacity: 1, y: "-50%" })
        .to('.logo_image', { opacity: 0})
        .to('.landing_card', { delay:1, opacity: 0, y: "-60%", delay: 0 })
        .to('.line_screen_bg_gif', { opacity: 0, delay: -1})
    
    
        // Card Game Section
        TweenLite.set(".card_games_section .content_section", { css: { y: "100%" } });
        TweenLite.set(".card_games_section .content_paragraph", { css: { y: 50} });
        TweenLite.set(".fixed_footer_btn", { css: { bottom: -100 } });
        TweenLite.set(".rummy_card_text", { css: { x: "200%"  } });
        TweenLite.set(".rummy_card_txt2", { css: { x: "200%"  } });
        TweenLite.set(".card_game_text", { css: { y: 200, opacity: 0 } });
        TweenLite.set(".card_game_text2", { css: { y: 200, opacity: 0 } });
        TweenLite.set(".coins_cards", { css: { scale: 0, opacity: 0 } });
        TweenLite.set(".coins_cards2", { css: { scale: 0, opacity: 0 } });
        var action = gsap.timeline({defaults: {duration: 1, ease:'none' },
        scrollTrigger: {
            trigger: ".card_games_section",
            pin:true,
            scrub: true,
            start: "top top",
            end: "+=1000", 
            markers:true
        }})

        .to(".card_games_section .content_section", { y: "0%", opacity: 1 })
        .to(".fixed_footer_btn", { bottom: "2.4%", opacity: 1, delay: -0.5 })
        .to('.card_games_section .content_paragraph', { y: 0, delay: -1 })
        .to('.rummy_card_text', { x: "0%", rotateY: "90deg", delay: -1 })
        .to('.rummy_card_game', { rotateY: "0deg" })
        .to(".card_game_text", { y: 0, opacity: 1, delay: -1 })
        .to(".coins_cards", { scale: 1, opacity: 1, duration: 1.5, delay: -1 })
        
        // 1st card
        .to('.rummy_card_game', { x: "-40%", rotateY: "60deg", delay: 1 })
        .to(".coins_cards", { opacity: 0, delay: -1.5 })
        .to('.rummy_card_game', { opacity: 0, delay: -0.3 })
        .to('.card_game_text', { opacity: 0, delay: -1 })

        // 2nd card
        .to('.rummy_card_txt2', { x: "0%", rotateY: "90deg", delay: 1 })
        .to('.rummy_card_game2', { rotateY: "0deg" })
        .to(".card_game_text2", { y: 0, opacity: 1, delay: -1 })
        .to(".coins_cards2", { scale: 1, opacity: 1, duration: 1.5, delay: -1 })
    
        // Fantasy Sports Section
        TweenLite.set(".fantasy_sports_section .content_heading", { css: { y: "100%", scale: .5, marginBottom: 20} });
        TweenLite.set(".fantasy_sports_section .content_paragraph", { css: { y: "100%", scale: .5} });
        TweenLite.set(".fantasy_cardImg1", { css: { x: "180%", y: "50%", rotate: "-30deg"} });
        TweenLite.set(".fantasy_cardImg2", { css: { x: "60%", y: "55%", rotate: "10deg"} });
        TweenLite.set(".fantasy_cardImg3", { css: { x: "-60%", y: "45%", rotate: "20deg"} });
        TweenLite.set(".fantasy_cardImg4", { css: { x: "-180%", y: "40%", rotate: "-10deg"} });
        TweenLite.set(".fantasy_card_heading", { css: { y: 60, opacity: 0,} });
        TweenLite.set(".fantasy_card_content", { css: { y: 100, opacity: 0} });
        gsap.to(".fantasy_sports_section .content_heading", {
            y: 0,
            scale: 1,
            marginBottom: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".fantasy_sports_section",
                start: "top 80%",
                end: "top 20%",
                scrub: true,
                toggleActions: "restart none none none",
                markers: true
            }
        })
    
        gsap.to(".fantasy_sports_section .content_paragraph", {
            y: 0,
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".fantasy_sports_section",
                start: "top 80%",
                end: "top 20%",
                scrub: true,
                toggleActions: "restart none none none",
                markers: true
            }
        })
    
        gsap.to(".fantasy_card_image img", {
            x: 0,
            y: 0,
            rotate: 0,
            duration: 10,
            scrollTrigger: {
                trigger: ".fantasy_sports_section",
                start: "top 50%",
                end: "top 0%",
                scrub: true,
                toggleActions: "restart none none none",
                markers: true
            }
        })
    
        var action = gsap.timeline({defaults: {duration: 1, ease:'none' },
          scrollTrigger: {
            trigger: ".fantasy_sports_section",
            pin:true,
            scrub: true,
            start: "top top",
            end: "+=1000",
            markers: true
        }})
        .to('.fantasy_card_heading', { y: 0, opacity: 1})
        .to('.fantasy_card_content', { y: 0, opacity: 1, delay: -1})
        .to('.fantasy_card_image img', {delay: 1, y: -200, opacity: 0})
        .to('.fantasy_card_heading', {delay: -1, opacity: 0})
        .to('.fantasy_card_content', {delay: -1, opacity: 0})
        .to('.fantasy_sports_section .content_heading', { y: -20, opacity: 0})
        .to('.fantasy_sports_section .content_paragraph', {delay: -1, y: -20, opacity: 0})

        // Deposit Section
        TweenLite.set(".deposit_video", { css: { y: 50, opacity: 0} });
        TweenLite.set(".deposit_section .content_heading", { css: { y: 100, opacity: 0} });
        TweenLite.set(".deposit_sub_heading", { css: { y: 100, opacity: 0} });
        TweenLite.set(".bank_lists", { css: { y: 100, opacity: 0} });
        var action = gsap.timeline({defaults: {duration: 1, ease:'none' },
        scrollTrigger: {
          trigger: ".deposit_section",
          pin:true,
          scrub: true,
          start: "top top",
          end: "+=1000",
          markers: true
        }})
        .to('.deposit_video', { y: 0, opacity: 1 })
        .to(".deposit_section .content_heading", { y: 0, opacity: 1, delay: -1 })
        .to(".deposit_sub_heading", { opacity: 1, delay: -1 })
        .to(".bank_lists", { opacity: 1, delay: -1 })
        .to(".deposit_sub_heading", { y: 0 })
        .to(".bank_lists", { y: 0, delay: -1 })
        .to(".deposit_section .contentTranslateY1", { y: -100, opacity: 0 })
        .to(".deposit_video", { x: "300%", opacity: 0 })


         // Withdraw Section
         TweenLite.set(".withdraw_section .content_heading", { css: {y: 100} });
         TweenLite.set(".text_span_first", { css: { x: "-100%", opacity: 0} });
         TweenLite.set(".bg_text_span", { css: { x: "-120%", opacity: 0} });
         TweenLite.set(".text_span_last", { css: { x: "-120%", opacity: 0} });
         TweenLite.set(".withdraw_section .sub_heading_width", { css: { y: 50, opacity: 0} });
         TweenLite.set(".withdraw_image1", { css: { x: "200%", rotate: "10deg"} });
         TweenLite.set(".withdraw_image2", { css: { x: "210%", rotate: "30deg"} });
         TweenLite.set(".withdraw_image3", { css: { x: "210%", rotate: "40deg"} });
         var action = gsap.timeline({defaults: {duration: 1, ease:'none' },
         scrollTrigger: {
           trigger: ".withdraw_section",
           pin:true,
           scrub: true,
           start: "top top",
           end: "+=1000", 
           markers: true
         }})
         .to('.withdraw_section .content_heading', {y: 0})
         .to('.text_span_first', { x: 0, opacity: 1, delay: -1})
         .to('.bg_text_span', { x: 0, opacity: 1, delay: -.7 })
         .to('.text_span_last', { x: 0, opacity: 1, delay: -1 })
         .to('.withdraw_section .sub_heading_width', { y: 0, opacity: 1, delay: -.3 })
         .to('.withdraw_image1', { x: 0, rotate: "-10deg", delay: -.3 })
         .to('.withdraw_image2', { x: 0, rotate: "10deg"})
         .to('.withdraw_image3', { x: 0, rotate: "0deg"})
         .to('.withdrawImgs img', { y: -50, stagger: 1})
         .to('.withdraw_section', { opacity: 0, delay: -.5 } )
     
         // Why Us Section
         TweenLite.set(".why_us_section", { css: { visibility: "hidden" } });
         TweenLite.set(".why_us_text", { css: { scale: 3.5, opacity: 0.5 } });
         TweenLite.set(".top_swirl", { css: { rotate: "180deg", right: "-100%" } });
         TweenLite.set(".bottom_swirl", { css: { rotate: "180deg", left: "-100%" } });
         TweenLite.set(".content_change_on_scroll", { css: { display: "none" } });
         TweenLite.set(".star_left", { css: { scale: 0 } });
         TweenLite.set(".star_right", { css: { scale: 0 } });
         TweenLite.set(".why_us_banner1", { css: { x: "20%", y: "200%" } });
         TweenLite.set(".why_us_banner2", { css: { x: "20%", y: "100%" } });
         TweenLite.set(".why_us_banner3", { css: { x: "20%", y: "100%" } });
         TweenLite.set(".why_us_heading2", { css: { display: "none" } });
         TweenLite.set(".why_us_heading3", { css: { display: "none" } });
     
         var action = gsap.timeline({defaults: {duration: 1, ease:'none' },
         scrollTrigger: {
           trigger: ".why_us_section",
           pin:true,
           scrub: true,
           start: "top top",
           end: "+=1000", 
           markers: true
         }})
         .to('.why_us_section', { visibility: "visible", delay: 1 })
         .to('.why_us_text', { scale: 2.5, opacity: 1  })
         .to('.why_us_text', { scale: 1.5, display: "none"  })
         .to('.top_swirl', { rotate: "0", right: 0, delay: -2 })
         .to('.bottom_swirl', { rotate: "0", left: 0, delay: -2 })
         .to('.content_change_on_scroll', { display: "block", })
         .to('.star_left', { scale: 1.2, delay: -1.5 })
         .to('.star_right', { scale: 1.2, delay: -1.5 })
         .to('.star_left', { scale: 1 })
         .to('.star_right', { scale: 1, delay: -1 })
         .to('.why_us_banner1', { y: "20%" })
         .to('.why_us_banner1', { rotate: "-370deg", left: "5%", top: "2vh", bottom: "unset", delay: -1 })
         .to('.why_us_banner2', { y: 0, delay: -1 })
         .to('.why_us_banner3', { y: 0, delay: -1 })
         .to('.why_us_banner2', { rotate: "-350deg", left: "5%", top: "8vh" })
         .to('.why_us_heading2', { display: "block", delay: -.4 })
         .to('.why_us_heading1', { display: "none", delay: -2 })
         .to('.why_us_banner3', { rotate: "-345deg", left: "5%", top: "8vh" })
         .to('.why_us_heading3', { display: "block", delay: -.4 })
         .to('.why_us_heading2', { display: "none", delay: -2 })
         .to('.why_us_heading1', { display: "none", delay: -2 })
     
         // Welcome Bonus Section
         TweenLite.set(".welcome_bonus_section .content_heading", { css: { x: "-100%", opacity: 0 } });
         TweenLite.set(".welcome_bonus_section .sub_heading_width", { css: { x: "-100%", opacity: 0 } });
         TweenLite.set(".welcome_bonus_section .deposit_images", { css: { opacity: 0 } });
         TweenLite.set(".deposit_card1", { css: { rotate: "-45deg",x: "-50%", y: "-50%" } });
         TweenLite.set(".deposit_card2", { css: { rotate: "-15deg", x: "-50%", y: "-50%" } });
         TweenLite.set(".deposit_card3", { css: { rotate: "0deg", x: "-50%", y: "-50%" } });
         TweenLite.set(".deposit_card4", { css: { rotate: "0deg", x: "-50%", y: "-50%" } });
         var action = gsap.timeline({defaults: {duration: 1, ease:'none' },
         scrollTrigger: {
           trigger: ".welcome_bonus_section",
           pin:true,
           scrub: true,
           start: "top top",
           end: "+=1000", 
           markers: true
         }})
         .to('.welcome_bonus_section .content_heading', { x: 0, opacity: 1})
         .to('.welcome_bonus_section .deposit_images', { opacity: 1, delay: -1  })
         .to('.deposit_card2', { rotate: "-30deg", delay: -1 })
         .to('.deposit_card3', { rotate: "-15deg", delay: -.5 })
         .to('.welcome_bonus_section .sub_heading_width', { x: 1, opacity: 1, delay: -.5 })
         .to('.deposit_card4', { x: "200%", delay: 1 })
         .to('.deposit_card3', { rotate: "0deg", x: "-50%", y: "-50%" })
         .to('.deposit_card3', { x: "200%" })
         .to('.deposit_card2', { rotate: "0deg", x: "-50%", y: "-50%" })
         .to('.deposit_card2', { x: "200%" })
         .to('.deposit_card1', { rotate: "0deg", x: "-50%", y: "-50%" })
         .to('.deposit_card1', { y: "-100%", opacity: 0 })
         .to('.welcome_bonus_section .content_heading', { x: "-100%", opacity: 0, delay: -.5})
         .to('.welcome_bonus_section .sub_heading_width', { x: "-100%", opacity: 0, delay: -.5 })
         .to('.welcome_bonus_section', { opacity: 0, delay: -1 })
     
     
         // Bonus Win Section
         TweenLite.set(".win_bonus1", { css: { x: "10vw", opacity: 0  } });
         TweenLite.set(".win_bonus2", { css: { x: "100vw" } });
         TweenLite.set(".win_bonus3", { css: { x: "100vw" } });
         TweenLite.set('.deposit_images .welcome_bonus2', { rotate: "-20deg" });
         TweenLite.set('.deposit_images .welcome_bonus3', { rotate: "-30deg" });
         var action = gsap.timeline({defaults: {duration: 1, ease:'none' },
         scrollTrigger: {
           trigger: ".bonus_win_section",
           pin:true,
           scrub: true,
           start: "top top",
           end: "+=1000", 
           markers: true
         }})
         .to('.win_bonus1', { x: 0, opacity: 1 })
         .to('.win_bonus1', { x: "-100%", delay: .5 })
         .to('.deposit_images .welcome_bonus1', { rotate: "15deg", delay: -1 })
         .to('.win_bonus2', { x: 0, delay: -1 })
         .to('.deposit_images .welcome_bonus2', { rotate: "0deg", delay: -1 })
         .to('.win_bonus2', { x: "-100%", delay: .5 })
         .to('.deposit_images .welcome_bonus2', { rotate: "20deg", delay: -1 })
         .to('.win_bonus3', { x: 0, delay: -1 })
         .to('.deposit_images .welcome_bonus3', { rotate: "0deg", delay: -1 })
         .to('.win_bonus3', { x: "-100%", delay: .5 })
         .to('.deposit_images .welcome_bonus3', { rotate: "30deg", delay: -1 })
     
         // Last Section
         TweenLite.set('.line_screen_bg2', {opacity: 0})
         TweenLite.set(".ready_sec_text h4", { css: { opacity: 0, scale: 0 } });
         TweenLite.set(".ready_sec_heading", { css: { opacity: 0 } });
         TweenLite.set(".hr_line_left", { css: { x: "-150%", y: 0 } });
         TweenLite.set(".hr_line_Right", { css: { x: "150%", y: 0} });
         var action = gsap.timeline({defaults: {duration: 1, ease:'none' },
         scrollTrigger: {
             trigger: ".ready_Play_Section",
             pin:true,
             scrub:0.3,
             start: "top top",
             end: "+=1000",
             markers: true
         }})
         .to('.line_screen_bg2', { opacity: 1 })
         .to('.ready_sec_heading', { opacity: 1, delay: -1 })
         .to(".hr_line", { delay: 0, x: 0 })
         .to(".ready_sec_text h4", { delay:1, opacity: 1, scale: 1 })
         .to(".hr_line_left", { x: '-77%', y: -195, delay: -1 })
         .to(".hr_line_Right", { x: '77%', y: 190, delay: -1 });