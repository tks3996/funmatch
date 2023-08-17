<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
</head>

<body>
    <main class="main_container">
        <section class="section_container landing_section">
            <video class="line_screen_bg_gif " src="{{ asset('assets/image/lineScreenBgDesktop.mp4') }}" autoplay muted
                loop>
            </video>

           

            <img class="logo_image" src="{{ asset('assets/image/logoLanding.svg ') }}" alt="Logo Landing Page">
            <h2 class="landing_sec_heading "><span class="play_span"> Play Online </span> <span class="daily_span">
                    Daily </span></h2>
            <h4 class="landing_sec_sub_heading ">
                <span class="text_slide_left"> Win Your </span>
                <span class="text_slide_right"> Cash </span>
            </h4>
            <p class="landing_sec_description ">Game On! India's Gaming Destination!</p>
            <img class="landing_sec_banner " src="{{ asset('assets/image/landingSecBanner.png') }}"
                alt="Landing Section Banner">

            <div class="landing_cards">
                <picture>
                    <img class="landing_card landing_card1" src="{{ asset('assets/image/landingCard1.png') }}"
                        alt="Graph With Content">
                </picture>
                <picture>
                    <img class="landing_card landing_card2" src="{{ asset('assets/image/landingCard2.png') }}"
                        alt="Trophy With Content">
                </picture>
                <picture>
                    <img class="landing_card landing_card3" src="{{ asset('assets/image/landingCard3.png') }}"
                        alt="Launcher With Content">
                </picture>
                <picture>
                    <img class="landing_card landing_card4" src="{{ asset('assets/image/landingCard4.png') }}"
                        alt="Mobile With Content">
                </picture>
            </div>
            <div class="scroll_down_act">
                <span class="down_arrow_img">
                    <img src="{{ asset('assets/image/scroll_down_arrow.svg') }}" alt="">
                </span>
                <p>scroll down</p>
            </div>
        </section>

        <section class="section_container card_games_section">
            <div class="content_section">
                <h4 class="content_heading">
                    <span> Card</span> <br><span>Games</span>
                </h4>
                <p class="content_paragraph sub_heading_width">Beat boredom with cards, where every flip of the card
                    holds the promise of excitement, skill, and big wins!</p>
            </div>
            <div class="card_game_images">
                <div class="card_game_animation">
                    <img class="card_game_text" src="{{ asset('assets/image/RUMMY.svg ') }}" alt="Rummy Text">
                    <img class="coins_cards" src="{{ asset('assets/image/rummyCardBgCoinsD.svg') }}"
                        alt="Coins and Cards">
                    <div class="cards_flip">
                        <img class="rummy_card_game"
                            src="{{ asset('assets/image/rummyCardGame.png') }}" alt="Model Image">
                        <img class="rummy_card_text"
                            src="{{ asset('assets/image/rummyBackSide.png') }}" alt="Rummy Text Image">
                    </div>
                </div>
                <div class="card_game_animation">
                    <img class="card_game_text2" src="{{ asset('assets/image/POKER.svg ') }}" alt="Poker Text">
                    <img class="coins_cards2" src="{{ asset('assets/image/rummyCardBgCoinsD.svg') }}"
                        alt="Coins and Cards">
                    <div class="cards_flip">
                        <img class="rummy_card_game2"
                            src="{{ asset('assets/image/pokerCardGame.png') }}" alt="Model Image">
                        <img class="rummy_card_txt2"
                            src="{{ asset('assets/image/pokerBackSide.png') }}" alt="Poker Text Image">
                    </div>
                </div>
            </div>
        </section>

        <section class="section_container fantasy_sports_section">
            <div class="header_section"></div>
            <h4 class="content_heading text_center">FANTASY SPORTS</h4>
            <p class="content_paragraph text_center">Take your winning strategy to the fantasy field.</p>
            <div class="fantasy_cards">
                <div class="fantasy_card fantasy_card1">
                    <div class="fantasy_card_image">
                        <img class="fantasy_cardImg1" src="{{ asset('assets/image/fantasyCardImg1.png') }}"
                            alt="Cricket Player">
                    </div>
                    <h6 class="fantasy_card_heading">Cricket</h6>
                    <p class="fantasy_card_content">Experience virtual cricket, win real rewards! Join leagues and
                        contests, showcase your cricketing skills. Strategize, analyze, and lead your team to
                        victory! </p>
                </div>
                <div class="fantasy_card fantasy_card1">
                    <div class="fantasy_card_image">
                        <img class="fantasy_cardImg2" src="{{ asset('assets/image/fantasyCardImg2.png') }}"
                            alt="Football Player">
                    </div>
                    <h6 class="fantasy_card_heading">Football</h6>
                    <p class="fantasy_card_content">Enjoy the excitement! Play fantasy football, build your dream team,
                        and compete globally. Win rewards with strategic choices.</p>
                </div>
                <div class="fantasy_card fantasy_card1">
                    <div class="fantasy_card_image">
                        <img class="fantasy_cardImg3" src="{{ asset('assets/image/fantasyCardImg3.png') }}"
                            alt="Basketball Player">
                    </div>
                    <h6 class="fantasy_card_heading">Basketball</h6>
                    <p class="fantasy_card_content">Fantasy Basketball on Funmatch puts you in the driver's seat of your
                        own basketball team. Show off your skills and compete against other players in this exciting
                        game!</p>
                </div>
                <div class="fantasy_card fantasy_card1">
                    <div class="fantasy_card_image">
                        <img class="fantasy_cardImg4" src="{{ asset('assets/image/fantasyCardImg4.png') }}"
                            alt="Kabaddi Player">
                    </div>
                    <h6 class="fantasy_card_heading">Kabaddi</h6>
                    <p class="fantasy_card_content">Level up with Fantasy Kabaddi! Join now, connect with like-minded
                        gamers, and unlock your true gaming potential. Thrilling entertainment awaits!</p>
                </div>
            </div>

        </section>

        <section class="section_container deposit_section">


            <div class="img_Section">
                <img class="deposit_video" src="{{ asset('assets/image/depositVideo.gif') }}"
                    alt="Hands With Coins">
            </div>
            <div class="content_section contentTranslateY1">
                <h4 class="content_heading ">
                    Fastest Deposit <br>
                    <span>Get 2% Cashback On first deposit</span>
                </h4>
                <p class="deposit_sub_heading">Use UPI, NetBanking &amp; all payment methods</p>
                <div class="bankListSec">
                    <div class="bank_lists banksList1">
                        <div class="logo-wraper">
                            <img src="{{ asset('assets/image/masterCard.svg ') }}" alt="Master Card Image">
                            <img src="{{ asset('assets/image/phonepe.svg ') }}" alt="PhonePe Image">
                            <img src="{{ asset('assets/image/kotak.svg ') }}" alt="Kotak Image">
                            <img src="{{ asset('assets/image/gpay.svg ') }}" alt="Gpay Image">
                            <img src="{{ asset('assets/image/paytm.svg ') }}" alt="Paytm Image">
                            <img src="{{ asset('assets/image/hdfc.svg ') }}" alt="HDFC Image">
                            <img src="{{ asset('assets/image/upi.svg ') }}" alt="UPI Image">
                            <img src="{{ asset('assets/image/visa.svg ') }}" alt="Visa Image">
                            <img src="{{ asset('assets/image/icici.svg ') }}" alt="Icici Image">
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {{-- ++++++++++++++++++ --}}
        <section id="withdraw_section" class="section_container withdraw_section">
            <div class="content_section contentTranslateY1">
                <h4 class="content_heading">
                    <p class="text_span_first"> Dont get stuck! </p>
                    <p class="bg_text_span">Swift and slick!</p>
                    <p class="text_span_last">Cash on Click!</p>
                </h4>
                <p class="sub_heading_width">Cash out in a flash! Enjoy your wins immediately and embrace&nbsp;the
                    joy of having rapid access to your money!</p>
            </div>
            <div class="imgSection">
                <div class="withdrawImgs">
                    <img class="withdraw_image1" src="{{ asset('assets/image/withdrawImg1.png') }}"
                        alt="Cards Inside a Wallet">
                </div>
                <div class="withdrawImgs">
                    <img class="withdraw_image2" src="{{ asset('assets/image/withdrawImg2.png') }}"
                        alt="Bank Transfer">
                </div>
                <div class="withdrawImgs">
                    <img class="withdraw_image3" src="{{ asset('assets/image/withdrawImg3.png') }}" alt="UPI Withdraw">
                </div>
            </div>
        </section>

        <section class="section_container why_us_section">
            <div class="twoSwirls top_swirl">
                <img src="{{ asset('assets/image/topSwirls.png') }}" alt="Two Swirls">
            </div>
            <div class="content_change_on_scroll">
                <h4 class="content_heading">

                    <img class="star_left" src="{{ asset('assets/image/starLeft.svg ') }}" alt="Star Image"><span
                        class="why_us_heading1"> Always happy to hear! </span>
                    <span class="why_us_heading2"> Fraud-Free Zone! </span>
                    <span class="why_us_heading3"> Playful Journeys Awaits! </span>

                    <img class="star_right" src="{{ asset('assets/image/starRight.svg ') }}"
                        alt="Star and Dot Image">
                </h4>
                <p class="sub_heading_width">Support is just a click away! Our team is here to help you in any way we
                    can.</p>
            </div>
            <h4 class="content_heading why_us_text">WHY US?</h4>
            <div class="whyUsBanners">
                <img class="why_us_banner1" src="{{ asset('assets/image/whyUsBanner1.png') }}" alt="Clock">
                <img class="why_us_banner2" src="{{ asset('assets/image/whyUsBanner2.png') }}" alt="Lock and Key">
                <img class="why_us_banner3" src="{{ asset('assets/image/whyUsBanner3.png') }}" alt="Rummy Cards">
            </div>
            <div class="twoSwirls bottom_swirl">
                <img src="{{ asset('assets/image/bottomSwirls.png') }}" alt="Two Swirls">
            </div>
        </section>

        <section class="section_container bonusSection welcome_bonus_section">
            <div class="content_section contentTranslateY1">
                <h4 class="content_heading">
                    <b> Enhanced</b><br>
                    <b>Extra </b>
                    <b> Benefit</b>
                </h4>
                <p class="sub_heading_width">Don't wait to get benefits! Instantly enjoy your winnings with rewards
                    and take your victory without any hold-ups!</p>
            </div>
            <div class="imgSection">
                <div class="deposit_images">
                    <img class="depositCard deposit_card1" src="{{ asset('assets/image/depositCard1.png') }}"
                        alt="">
                    <img class="depositCard deposit_card2" src="{{ asset('assets/image/depositCard2.png') }}"
                        alt="">
                    <img class="depositCard deposit_card3" src="{{ asset('assets/image/depositCard3.png') }}"
                        alt="">
                    <img class="depositCard deposit_card4" src="{{ asset('assets/image/depositCard4.png') }}"
                        alt="">
                </div>
            </div>
        </section>

        <section class="section_container bonusSection bonus_win_section">
            <div class="winBonus win_bonus1">
                <div class="imgSection">
                    <div class="deposit_images">
                        <img class="welcome_bonus1" src="{{ asset('assets/image/welcomeBonus1.png') }}"
                            alt="">
                    </div>
                </div>
                <div class="content_section contentTranslateY1">
                    <h4 class="content_heading">It’s a Win Win!</h4>
                    <p class="sub_heading_width">Every second spent here is a WIN! WIN! with exciting challenges,
                        strategic gaming, and fantastic prizes. Let the adventures begin!</p>
                </div>
            </div>
            <div class="winBonus win_bonus2">
                <div class="imgSection">
                    <div class="deposit_images">
                        <img class="welcome_bonus2" src="{{ asset('assets/image/welcomeBonus2.png') }}"
                            alt="">
                    </div>
                </div>
                <div class="content_section contentTranslateY1">
                    <h4 class="content_heading">Win Big!</h4>
                    <p class="sub_heading_width">"Big Win!! Kickstart your gaming journey with our sizzling 100%
                        Welcome Bonus. Join the action-packed world of slots, card games, and more, with double the
                        firepower to boost your chances of striking it rich. Don't let this opportunity slip!!!"</p>
                </div>
            </div>
            <div class="winBonus win_bonus3">
                <div class="imgSection">
                    <div class="deposit_images">
                        <img class="welcome_bonus3" src="{{ asset('assets/image/welcomeBonus3.png') }}"
                            alt="">
                    </div>
                </div>
                <div class="content_section contentTranslateY1">
                    <h4 class="content_heading">Double The Fun!</h4>
                    <p class="sub_heading_width">Prepare yourself for an immersive gaming experience that will take
                        fun to new heights! Double joy awaits you with our fantasy games!</p>
                </div>
            </div>
        </section>

        <section class="ready_Play_Section">
            <video class="line_screen_bg_gif line_screen_bg2" src="{{ asset('assets/image/lineScreenBgDesktop.mp4') }}"
                autoplay="" muted="" loop=""></video>

            <h6 class="ready_sec_heading text_center">Unlock the <span> Winning </span> Fun with <span> Funmatch! </span>
            </h6>
            <div class="ready_sec_text">
                <h4>Ready</h4>
                <h4>Set</h4>
                <h4 class="readySecShadowTxt">Play!</h4>
                <div class="hrLineSec">
                    <div class="hr_line hr_line_left"></div>
                    <div class="hr_line hr_line_Right"></div>
                </div>
            </div>
            <div class="animetrigger">
                <a href="#" class="playnow-btn bg-border">
                    <span class="bg-color bgsize bg-position-relative"></span>
                    <span class="playText">Play Now</span>
                </a>
            </div>
        </section>
        </div>

    </main>
    <script src="{{ asset('assets/js/jquery 3.6.0.min.js') }}"></script>
    <script src="{{ asset('assets/js/gsap 3.12.2/gsap.min.js') }}"></script>
    <script src="{{ asset('assets/js/gsap 3.12.2/ScrollTrigger.min.js') }}"></script>
    <script src="{{ asset('assets/js/script.js') }}"></script>

</body>

</html>
