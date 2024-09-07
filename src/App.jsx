import {useEffect, useMemo, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    MoveIn,
    MoveOut,
    Sticky,
} from "react-scroll-motion";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";


function App() {
    const [setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#409137",
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },


            particles: {
                color: {
                    value: "#ffffff",
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "star"
                },
                size: {
                    value: {min: 1, max: 5},
                },
            },
        }),
        [],
    );

    return (
        <>
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        Happy year together my love!
                        <div className='emojis'>
                            🐕❤️🐈‍⬛
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={1}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Un año juntos mi amor, que rápido pasa el tiempo, siempre a tu lado, te amo mucho mi amor!
                    </Animator>
                </ScrollPage>
                <ScrollPage page={2}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        <img
                            src={'https://lh3.googleusercontent.com/fife/ALs6j_Gu8Ne_xORQjYZO9vYLfhtbQBcl2CfAtNj3oOlWeeIzUa8PTCApZ-5Sjmry_e4t6GtTd9g0EfvBWK1U6F6Zlhs9lCSovphsuNeUh-GvTCr5yszA8RuzMMGpAHaexw1HSeS3HPGoRidwehJkVQXYdJPozolWV3f3X4la084u_3LHI0rldIqZs6Ky83oLHEMTPVYpoTw8jeu__SpJ8BSVpDDVHySjHtBzm71Ot05pWKnQYmizjEKDL7N74CuwD8mEru324ZPuLkVyPFFvl5ZxsT1a0Nx-HiVcINBfamAJvZ3WK0khOVnv8RL5DmqvKgerZU7udnCvUiRI-dJo33lrtLYLaxCdOGQC16ODdgHo9e7chWwzsvvIFQ3jO2l5X9al8nGpKRZ_l2BIRZP7sSqQAy1dW9TlPrcUTQJbi4dEamXyQA63ZQBzefumJI05eO0xTha8L1wbXF_nTSFdpCEySToPUbHdW_2hmIhnIPyGeGUuAGLQUexp0sk3EQSK2LJOurpD6k2BDEtOQ2X2m1EkNAoz3-3eVatlS9gjE40X8-vh0iNbPO1a_dps4Ix1L3pwZSb7sh2_Hoq7Vcmu-euHUxrhWR58rnxRxfrqYS0I9RkJ59maP0YWDbcC8QLb2Nii5AQWY8lQfKdh73qDHQSe3ZFr0TuzU00ABOTSvb17mDabC7yOekx6Awu9-KKV05uoUSpRNHhdye1TUkFHxXVbyPzzEcHy7_2eD8Xq0oprzcr2vq8314GhMM4hvZBy_CQPczEegMt7e42BTYzNXH1S8CDm3db7bbyCrmT-VDChNjpTMOnynmtJfJ_kg8vY8Pr_UeK2us3o-C8RoFtxx3RbhDzEEpXRl_T9x4Pnc-QwN-QKcVHRsdOdkeBvSdm4HIyT69CwAULTw9bodkY1C2obj6z2pLE-xxOg5W-NDLNsu5YDRvKdpDmHZ_tIIZgY_g8hF1RmSPilfCR4vfs1XCQNu3vuhVpp5uC0wjb4Ayr0i0-7hqA8c2g6ccNBsZ7HIXp0J7WPH4PphX7Lt7BK9Itx4y8B_vgpFKDwi42I2FHZPBfZSTm-G4etDpYxq3TT826QUmTXC8xoVUO0YmnZGOF2tTPHAUaZGY1gBqW3ONJi5omGbhGq1cX-OHBYnjkirTmFTK_iUrDLyENmT8MYlxAcaJJnOn21fR6QuNDbU6g3od1B_nkssMZAQEu7Kd4lQMHJi6etpkdaSOvwVVYVoQUsCtheLmX9A3BaDcoP2yZhxvwlqaOdOrK999rOgfHb3IF_3qh5j9rsIoLPaW9UPLY8lWzzr9bTRk8GRgBWO3kgCvTVGazj-sogoNHVdRMZ87ltRoYuJMxE76JrSF_BpXTqs7g8WQdG0Qm8xdbQJ7EavrZ9B4MGyPFkPNZRKBpL1IRfrqi77JBV1ADKE_cWFiurlxX4y5o2VKcZlFg_HCVSiALzgQbBI2uq_ZQ47QaaLOT9UX_-HpmrRtZbZfZHmTFyua3Wdn5l_-YeXHrpfqMYOxhHUB3pah5fDy6_9G0yMCyPhdMMBUXbMYizV8PNnNxAde-n017VYpwS3zq6XaQTmNsG94g_sTM3zdJvc3AC8wwQDGxfy1h0pnzA6qdqDmv9nBHtHmCT0MgUmcvuFPkrYm06n9Iw8xRJOgg7Bw=w2560-h1355'}
                            alt={'foto1'} className='foto-borde'/>
                        Feliz aniversario mi amor, te amo mucho!
                    </Animator>
                </ScrollPage>

                <ScrollPage page={4}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        <div className={'fotos-bebe'}>
                            <img
                                src={'https://lh3.googleusercontent.com/fife/ALs6j_GJ-M3SzEeJX74FAaI8su3rPbqLyPpZxYGg9560GhmZEXqO5ig96YEToaJ5AQniELF8UjWy17HvhXDzSWo2igCDUV69LqBVGuexTjkMB65QnuMeRxOw0cCtPIUwqv7MnZlNaW8SuyhVaBywC-GO1XF8ItYZlSYbVvSS6A8vD_FLCloSbjldNTZnFmGTxvMRwxoRDub7da0kb62Z_HHvb86GtWlXzkMvCfGcQrlnljtN6fjebYhO1sDoWE4KKhsFWreoxMltQ-yr0D75V3STing81uQlnUlgfyHdB0yPxI6yGS9q8yvPwFvcaLkeYABcyp_DD498-Z68u_T4WS4EawZAUFGheKZDm6HrBPKds6lXf29Ml20owVXmd_4wpXtJyVGAGNFcLQX2Tv4yebiXuT43Y_pexa6QPB9O3CaTtKXp-wUPilWCkfdvUvIMlqKwvCrEC0lrkS0uQhAz1EtTpbDspWBlIJ9ysdIR0uKtmUvSfKPMLGP3SUTHAeKVT4Jh3eyHcjrwHWCHmU50qWzzSyqK1PXqgB0-ZVjuX0FzKYMmnEX96DLH2IpJLjuJo-w4fpPtKPNtFyqBmXSIBuQQyw7ADipL7Gx8JrWG6_wswnLDegXQmPkHH8hTwMDeNfXJc9_q8k8pWq38zJiT6a91taKKk1n07D_TYEOvRhUJ7B2xPrA2gEy8xER3Et_5w9d34u7MSwHUXThJB0qVygDpxwXZUcxm5xrfY9NtP0fxNRtdGsDuvF5Pp7EigCKQQr4YgQ2rwHJkknSQZxnmcbuqrMhxFwA71sbCrYsF1b_KQG6wEZVPAeVS7cj5AqxvUGd6DelRQwGPr0CzbRvy7PF-6EQxQ2YsTEQgf03H4aLeevQ9zYDZjcVDZwuqWCFN1Xa87xV5VUmHjS-3ZMqoINDWlBghqX66putCgRrgKIOTurVXTEs0BfKOwSTn71bCXTZJ_-YTZxshTiTLnirq9Se3kwW6v9RrujD1HtU6whRdjlJf3pqI7ieg-T57fPgE4QYOR7_STwnfbC9yE30PjABaEuRcQiVh4yWWnWCrXPD-EuMTwKI2GRZe5c8L-rDehqe9CfPoizGWw3MW9aI_rEYxDOZ30ifu1sXkAd-CXpoBdDjnRU8qvctnVglbAdqdtVUmpuGW182N3lS6sh5ZAM0nFuF6KIOJ3xEl6KlZesWiIqSrbERJKfr2k5sH6O469__KrMhBBAgncJwJUYyhJ2Lstf9WrzJbF3frqrMagiyNkR4rdu3k3RTTeKSakXRkHS3iRCkMcl6zChVPNkitPGsemq6lgf4Jhxy1mhIixQuBD8jzsrJAagSpPHGzJT484jG7wAiuFGCU-wasX0VVIUyx_8h-RvCaRDeAdDM91BJG24Q8DjTCQJyJ97ege9GfWCSXB2lzUfWnzmklczO3Mt09u59WvQQGMQ6v54fTEjegk7BI7U3shSV9mtSrEGz1lAjy8JopCQtuPu5-GDAVJpL6tZbX9gEwcd1LoAkPnQ5u5Ou2Vhfj2UiJYtSMzTmERXvIxN3hVYSKBprMGoB0Lvzyh4l5tOJscnE6stqBLp2XJTCsdVlS1QSBwcPRatl1Dt9ep_Su80LsUwAeVpqARSOA_osIwAqT4QrhsPuOZ2mJ4ugWYPxOHejjsgJ6Eg=w2560-h1355'}
                                className='foto-borde-redondo' alt="logo"/>
                            <img
                                src={'https://lh3.googleusercontent.com/fife/ALs6j_EETXPH2a7eF4ncB0EvoMEEOGpHKW-TM7YI_GuC-Mrms13GRGYvrRWego4OJ4tHuoJSHALqrysx6unuk_KX1uSXC-LD6ZPKAppFPRBG3KYMNwHKjBxaF5XUCtUzU3ymfjQt65gkhkZfS9uNos8ce9v1A-iBZ3Yh25bFlFgqvOGonaoDBJXjzL-3p_2MgtTHHQEBUqpNQ0BkL3zAayWCr2Ed1t5nG-_MbBuaFBRz97ll-Ez8SlA7QenuneATklMqvvWf9CkziSPXTWcrhsgDDAQWz7Te0ZRXbCJce5PVziko_rKRKeE7v1M7EZpkmvaKezoKv3Rj2imKsGVj-_MQnayQGGJX2S3TnObWGeLZWaMuttWkXlfnJC1T-vlUKQPx8EDPOiD7UrrfOzM94tx6qGJGUjRkglGA-Rf2aZ9Z3BXV0qsTOMCjBjIbhHjYJ3yie0e5NAHLlbosY6Jm6oEXyG9vUzB4ZwgwrJYKU9ujP-X9APxB71XiVEBFYaR-UP7A8-92-Rdt-5jP6JgP2knTdU_FXdVTnoFQCfMMJroN_jUxSWunpE668SdKC8KD8XEQRGgAbm7yvCbmg-mgWYw3TvHa5a-5Qog_mYRVxOElJkbUSxjajNW2rzt7Me7BG53d3TO7xltK2L0Vh3na1tP7jtFp9_-YHoKPHIXsqcVu5DgRSzpjv4m5Wded3eKgoq5cj2F4-TvHJEIir4pyctwt_pc2XqR4tR2ap1HAVWQnce3ySbLt15h5T4iZv1EDkBlcwe2iPpy70fsQSyYxkAecMyt-qZfwOG1eznUAdoWQDOUubxrSC1xZhp8ljNUDq4zdqa8vGxCogmgRx5es2Sk5BBLNy4vfszHAWSjAtU6Tp_7_JsbIHP5KeC5bbaICCTL2bvnixKXcLVeaGlbxbt9lRwaL8l1qF6g5UQKm3SxzJt6f8GHO2pxN3VhzI5RA-y9VRnBXee_sGx2P-2KV7wZ6bp02gLt3bybd-ciDDE5pjnxET7Vbk1CSpuno9pwTACS1XmXcs6j-AAiW3BVXoUGtYuRoBuh7GFXNiK5dJYegpOXHR4RHSqo2yiqWobyjfwqmlOWCTxzfqMBix9ATt00h_Bbb9aDe3XJo__M_zJbavub0P-OkXVZ2-Up0-f4Iqey3euCGqlj8nWTuKGqUfD8jqA_1ZUHDSBEAZd3eFNJ9lGZn-Jf16jBb2nmYCUwnGpeY_ba5fTQab1GLM3YBw4JpRSqid6IrFpGf7x5R-oZQtoMb3ADMHKyjZTZN1eqXAci0pTGlykZMAQNtfQc6gDJs9QkLzSQT_dGV9lD9ws0RuJSij9-qBMGWgBWNg0buGo6_m44uOoM_u7pX8SHHjAEhchP81zaZfSU0rVApifUzcno5BqFP1GN7fOCymIi0Ts0QFryz9j6JvNs7ROeB7AsA0-IhZ2_qWYtHv1pJn-vTtsk4TgdDhS3mdRfZ3ZPQs6BPgU__P3BmqLJBsE5Mym4y-kuJHt0_1dN8ZWnWkgli8S6cBDNgNQ6EeQOMdiYrko_AQuyN76jItJOoaYumaythh2XxkPTg3OpIUmtNOmXqt_N9L3FMFg3vtA7-YdyU_KAOw4Q4RKE0xcVk52x-RT0Fm6qIemlF4IRXXGDKNkwPcSxTfmJOAoT3bj_EHw=w2560-h1355'}
                                className='foto-borde-redondo' alt="logo"/>
                        </div>
                        Nos conocimos de chiquitos, muy chiquitos, y nunca nadie pensó que nos volveríamos a encontrar.
                    </Animator>
                </ScrollPage>
                <ScrollPage page={5}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        <img
                            src={'https://lh3.googleusercontent.com/fife/ALs6j_HSzSK2nWwSKoXi9cdqtQyvJeW9SXsGlSh5ei8oq2dEI91TACZ5fbvMRiGGzcFVteM5DpT6MuVVJVgjWFxMDZn3uBrJrQ0gdlA9q3NucNzQ3tI5-jgqgX9DXTIdWMOwrSjus-mDDjjCUdnwjMsb-7QIAGvKF6uFcNnEUFA-HMO0OsCuWNHrIE0uqVOsY4DjtBdg2GArORQp1MZDpjs0EpYlvvmRaAa6Lv_rlbGIvRBLo2_ZBfyTOcxyqCnsnetk0ns-2gQwVD-xaLYQegXe90MexiXSKSTnm201txBXFCCTC_N__m-RdY5HZHTXZv9qpV45_OQDo8a3sn7pTMkVFhxCj56CLVWaMcecXFiDYkD_q3Bo7vRC8XakKAolch6GQhSb1SabofTwS_XTPQEGvXrhMIZ4Els8I42LH2n_1Grh8vglcJdPQlj4GxRNn5wMtE0e5fiIN3Nz2FYg-oQnRGs8uouiRJ_Q-zz2Ex3Cug2wLfjIBaMTvyuAarI1H1z3-gAdg9JdaUXqaYpkhsD9t2f_DlHtxKC6lgKBThW_az3V-5x9_RmxLyzTiVxue8dYELnDo6yXxqNn2gEi8rfH1K6rHu2RbdlX2n4jHzCnoP53GSBvT-2qbRltxL9yWrSAS32HD-k1iOpVToaMsmNmPXY5aFP6tX2QVcW5iuZPtZtA5qB2wARpYa2QQj_4Gxh-bYEUXWiFvXgimsmBMWzevZpjQ4nXA0_E79Ne6fNPZFzWfs71I8lBIH1KQriKtXKhMlq9ghpPDphSUZodhVlJJ68rDtKL1pKaR-bl-qvRYi3pzqyqz7INpUO7UCF2zcXZbNahGe_Id2jQfkMpn9kXEqanMvll7wXK7wfe6pHVZi7WOlkJ1g1d6FT2AsRnefPhvvLgWzYVnB7V_Y6vvBCKuFX6rX7EAZycEdCKYNysLx3Q3oXU8aUceD4-sUvR_zixs004nLTGefldHkkgSdF3MWFahRjXSOAaj7M4YR8_oVHWRHAxKSU5Wlt3FZHScqxwMk0o3s3hxGw0vK_OrxHwiXJfRni3iugtovF7wwJV5eyQkf0h7Grb9z0d2D5GTk8f3u6I6oEzd8zqVc8JhqZKuaTR9Ex_B-Sgi62_TNVT2WEHWscc-1_HJ2L8DSdh_ddROtvdb4G32AGbVbKmomzmlVHZNpGJWQg1zfM2I48Dk_IVYF2F-443g1UtDeMUhVgNPTokHAoLXFrvwpocK__E6lL0vdNV3nt4YFwMXz_-7RuT8NXop8IByx7fKYJfC7ZOWepDrvbc7BuA0Uvziu77racEWb52Y-sE0PTXZD8L4w1GpT3sBy55MR62BkdTTjoF_HNG6APJn2CmJzoiBlBzYTc7gLojwH8jOdyUt4cf3qTw5fu4hsc6LnHfOkBr5ZVOjuMdk8AIpAwX2rOn_J7_xbgXMy3LboDOGWVJ37yenQMhX-cZAaZwe-cdl5BdfReXqr4evRc1LoxQal8MNItecEZE45NyyOaMUgkjyHHwhoVkeGPKSJbJf1EYOJ2Vrv8jDPllH2oqXUC6GMD5QKrqVKkf49SyyByn3swgZu6UljnSvkQiMWSpd1WbOKUC7zgD7mMonROT2n3l8OTqqKXYjaC6an0CpsamqjeUvED9S1YuKWB0uOXLVGnxxw=w2560-h1355'}
                            className="foto-borde-redondo" alt="logo"/>
                        Ni yo pensé que esa salida y el helado de pescadito quedaría en mi memoria para siempre.
                    </Animator>
                </ScrollPage>
                <ScrollPage page={6}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        <img
                            src={'https://lh3.googleusercontent.com/fife/ALs6j_HfQjTicKA5Q694T0r8jicwgphmADBIy9HjmdJbSlDBNtwDdKRcuEyfYAJRtTlQr5vUcuLGaez6rq3JVM6xz6re8FaZBqCmg5Wi72JfHxtEh8bdH9wuTBwDD07ipdoSnT7FCjI-nmRzfHdtlSlTFQkPeKtAhKdpGiY_NK3CE4Y5WHgRoZmLOHFhYHxbaRIo1BWUzho7sk4L9XTaUhIYuQ_C_5P254XnUCM0wGcHBA5ql_Dya7gLSfr5GOyk_1BRVP8YLzOw6wbQq-3u-t89JUyjfgaQlo9n9Fx0-MNI0ygtW8Yg7Ms1f718EeGuFaCkzqxU5V6nHrTALsnFInws8b9_uKSifoaqU6MzMIAb1XCOakSOaWPSXY7EAHTHYX6eQHEIHStD-9AEokwE2YACIYKOL6kdcHgwmxBOZBrSGNcZDbr5aWkI9Q1anZEl55tkaRR7y9fuD_-oMaj0ShjdA8jkr5CapIUNGXM79gRMv1UbjcBU7pKAcwBAVGE04fUCT8Mstg6XxIEupN8o42eSbDGoykxdFRVJOgMsU7Z1g3argwjB3gFRBQ8ybFODULMkzp8NHNM0Dkt1_Bwb2HIQa0LXxE6ggn99ID-f_5gxtEV-pkB7f_jykh_7HgsmH_djSfnw6hHIE36rnAhuLHMMeZqi0sMkoFbmPSU_KLVd6ik9Sks4Q3Pd9f1mmldkOLbW7vNDNtQoGZfDDNaWrNIeLFq3mcE59etVuvzohmb7Pw9EgnFOIzNxnjDIc3WSs0WVa15NMiDoPaJ2NwnKJGkj_W9ucIf5rcO_wuxDhSLPKfkMxgkt6DarVktcpD7B1IbEeEsXJC5uj30fapKWLi_0R7MQDnnW4JOBm3ZeUopvAXyq94qx_JcmEUDXIKK0BUaaCd4WnyO6b__RAR2h6RQVzjQ3ERrtX402I9NgK0Qrs0OdyiZpUBTgTNwcdRlrcZZjHBClxDt0E7sQ8gPu37qw5ttHMRuRlpBt0839jVvigVXhFC-cFgg8DNFt29OVaHL7yt5ROnU2efOlbaIPPU3rY4VNqixo4fv5JlPfPhpz-dGS__smFeKp-GStQ0BMWDDJGUypID4OrJvRu-VJqFcBkO6eU0hUhMItSddv1gEqM-hmzQgyfjdrVnT0290fxAsLZ6DNiG0YRF5xAGBbyyMNaorzyuFqcQnKIaCw8ZveooXrFFL62cuR67uxQhr1lvHRX7Zc2GRtmDioxgPHFoQBWyckViIfjhxT8ybb_OtAyir5Aj9QvuMQIZFL6GE1E3jraR_2kxuIJ3aIP8yHOcYMMJ9ZqS88PGxK02Xt-9fs8Se3pZejEXXWzxs5iwYS0UzF4lBrlKa0p9kQk1FJLqhBk2V-829iNi809a-PlwRO4U7Rjfn_vPDHjrc-GGX2UmNC9OlEzWR79YThbGYLlRzMy8rtS0AxpGjkxs6_aZpbErEEq1WPWXivvA7bNZfz0VPeVqUkL_W4w_WZ_1NVxiltDOsJt0CkoDKzub3K3jFs81BIlryhgLQVcRwcnzvZXW5TEgXYlDBLgVkgblOp5hmNJTK9e_JpQIYQ5qqLgBZJR32v7XZH9yK7J6Q2oWbtaH0CtnJvg64pkxHJMNmfjh2vdEXhAjBWVd9VmRY0SdbAt74PQRtE9jdjZGVdPA=w2560-h1355'}
                            className="foto-borde-redondo" alt="logo"/>
                        Como yo nunca imaginé que me regalarías flores.
                    </Animator>
                </ScrollPage>
                <ScrollPage page={7}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        <img
                            src={'https://lh3.googleusercontent.com/fife/ALs6j_GgS-MpU3oO_62pOC0nQp-RP_o1I665I4PemzS3P19iLHWNiCEYRI1c7e4CzZjbUlyCdxr3W-mjMK7C2bKh2_uaPn3B8LgQC_epX_otgZD3U0L__Z7nRAlzfu61O82iyGANNBZ6gEcNo_59-YRnoAt8QcX6e9vJDBoF0zXNBAEAabbomuXTTcJWfN2U8tGVQZdbgcxV8PQ-jlXtmXvh2VaAwC8ZWf1Sp3VKCeDe-7w3MGAZivbGab9aJG7HsPbgyl7QdeQkYHg13l7q4fMgj2rdyP1TyafnWBfQ9ZDRG8TiZdkkO4IKG3we0K5v_Huulu0bIaRlqdqNWiCI760OzgNDoejE34ciluoLzjj6EIFATSD3fLirDUilXeZ5t-MQ0FuLeMvcOQ59ti8nQy6hMxa0tcRmnyEPj4Qoah-tPAnBxDm7nU2sOVPFlYwg3fjMJr02E0jpBC5MLLCTYB3ivcXfVKPI5tTPXgxcOOVIBpGq5l3wQkgI0d9s5k9TYfdKKjncuDk0DKYXm5eFCmFP8zmXOAJpQHWDmyAN6WJEc9-RPV-oyGaCZ1OOVsFGFU0S-TIhuhnUQXbNpNs9txaAb02TqcAc8tyJu1SfxtIQZlXT-nUoRWvLQR6F-M9cq99mxYuDU4M1FXDX_QOQedl_ZVOxKy4RWhQgYx7Bhthk32j9b_6aB0WuqXVoV2LhfWPP6QOlK4uDHUk8B-_e_fxkMxYUUjl0mZ4cq-T4ZdcDpGmqVlX8xAt548E_WWptReVfLne53u89Spehs5qI4dhUyWxpZedkLwX8RaZ1jky_njB9BDtFcUuzIESPkyn0KaCUQQ-z8TkD5aNtlmYmUm_8j4n5EKx15KEG_Xgo0Hpj3ldPqg4tXu2yeZqRkZBs2NpnYScaJUubMRZkxS9pIElYEE41r_SBbJRId3kLN23J5NJlTam7uS1W2mxjZYkA7LctCslsjR0Q9__DFIfsWmUvD6bUvG6Oj9E5aG-t_L_RCo4GSVZgnw1fzqa2FjbOPjChve82SC5Rq3NHV9l2E6E9JYTXt_l8sLBTbvjYH6kRUtv8uqguoO8h-ia_wKsYkIhctb2BlMPGjZ6v09VYQz5fNH95UcP4yD5p_Nk_0A1juQKtvfJ5W1pre-fekdbzJBiF9OYAeY_17nFDOrDxnvdG_2RkKEnskhjU_Sb_7fNkRzYluNoSKK66twtfCH7qgueqhkEOxp1J-Cp2k7A9pBWa6mbDjHJoquGVm6x7Yo2VO6TAhXmvyBxDUYY6ymEyCa_R0JQDBwbvOmhZCwlVchqGANWn7NUA3lnkdlk8whd3XrHgsBWyDrj3-_M4izSJky13ycnL87BuNQhtETxl3De2hho_9ToladTnjh4MQniBhabaWrojyA0tbT4CAbkG8mEf2QZlgCIUXXnuC6ANvNdDtzi3-iIAx9n61iLjMbK4o843b8ihcwdbQzWqFkLD1-RQjj1jXAsnkRVK46a_bnBeoPj1m0xQxjSg2XneSm_OeVmmv7bYwjlPxq8QE2fHEU8mLcQ7gUtl8Jd4_CGnHWIttz6QMLQ3WE7KSM9-IM41pvL37J94NZcnImDXil5sJEaowiKimIDm5NViDFI2SH-NHTrjWYhhaW8UlpCHzoTtSKBWkL2eKin7A9brjLALRg=w2560-h1355'}
                            className="foto-borde-redondo" alt="logo"/>
                        Ni pensé que me celebraríamos mi cumple juntos.
                    </Animator>
                </ScrollPage> <ScrollPage page={8}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                    <img
                        src={'https://lh3.googleusercontent.com/fife/ALs6j_EccT7aQ_FBy3YvfNpJ1MHdWMCKuespf_Q3VbmeWvb60TwqD8NMNX8JmRm7cOeon_ghVwZVNWZ7ODWD7s1xGbm7LioE2o92vcTKSoBKA6QKp6nfDBZm1RznqSkNi6Mq0B7v9s2ZKS0hjfJwcTQ8Euc5tfCtWMqD09Tbkzi70VZvSQkLISausmD6sdTzxaHFvLnzT2IMKzI5_OVi0iiqJylCXvQMAL-loSzVrVbVwDQQHEp7dxnyj2kpp0-u9524BJZu_9_EqpCOgOHVCVNPr9pAXx3Hzaa-SWeGPERIJRRA25s3dzlOVSmIS-ObBI-qLPVAY9RtVD7q3iE7-cwDdafK6pwjehXzfoJ9kQRcSp3xJSH2UvRXdkwv2Y3SyBnmk97PSS3nVDjCYfompM9K0DblOC4cWsKBSR5FJ1SG0Gjl6sIfSCDpnBpo9r-GxiwfSYi127fVT0OeZCF83VADlt_J1JciK9qpsE0X7qjQYr1K19-pAoDw-lNOIvF4xK9YEIDAqqFwDngskwDndPNrXgLmCCOxVYlRSxVxLxX5J1K2kIShzgPyjz81Dt1ep2QlBSWm7obtsk-q0dWxfeivBRRk1gzf1KzkTPxgLoL2K1Rzl7wXTjAJSNp8KE-q6HuiIjtWdnb3jdOXcHKoROjz6n24zZ3q9fX5-dK64nHnSoGNmyQeY3xJkAN3BAfRyCDpaI9zFyIzbmR29SxqV_dpaCvU3xs2fe7P8e7cZzrFPV1j_GgP5xX19Iy58cFiNxYKe7Mw1nUq6Dq3ETL3-beGe8CwwRFg78lXOarNb07nbQpb42i5RPBsmVigsERQgzdayKF4GFbxrG25-nxhatRIaox9GexbN9LYp5LoQLslsglLV58hch7IxzGRF8GMYr54B1Hf5ifUTrniGqJDQq4Fl0CXipjSWlsHS0S6z374RCIIKyzb2Q9Wk8vgHJn56GEY320IxV_ba_JCSjM43Kd-8hTQnALupgHEFdA55P_pjPCTpxHnDSnG6dYK4cV5rNEaVSZMiXjxct0iaa68DPzIRaHMUU660nw7X2_WuMrQghveddsjso_m4wVCulsrf4w0x6WFprwzF9ZK9I9cfAQzBRo3sH4JFCjd2MziMKNOXJK_AdgnOgDI-NSCGa3Y3XByeJ0UF-eNGPWHGveuJfIWcMsL-ADcdPVupDKM2SohK0xjS0yE9Aunf7fWLhbIxS4MCBj65Yeh7HZhFw80nPJrTgnFOSOyQZEJ9r4bZmFRZTxCEiHsCZBpi95b2wA8m-q125swIwQcJ2e11f3MaYocRp5JnqBKwnj31gPAz5cviYXokgZI78nkFbd6769xL7Ho9aH_zXmU8A2OaNqbzTARQYLxWR5gZWUv6Xuqg29KaigQm41kPnORWgY3g58xyY1JrFf1MHTfK6vdJY4b8o-vr-s1KXZw4ROkQitQy1OtaHmb5pDPoScun1iJYsxaeG3Z_V03aotw0kSkwfS9aiGQ_R-J7tXuxvzDbXIq7gjQrgEwxVOYS7JATiEjQE51HxTBIP5oqFOr61Amm-oTxupO7YSWFk35UXPXq6tEOf03Xt7QKafjjmn1HfRv4t24r7NiMh51zWCN42YNr9RVlds1E_ixQWY8zRsbHrabZibaeQw4WAWDLsiLqxnM=w2560-h1355'}
                        className="foto-borde-redondo" alt="logo"/>
                    No recordaba los nervios de la vez que te pedí pololeo.
                </Animator>
            </ScrollPage> <ScrollPage page={9}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                    <img
                        src={'https://lh3.googleusercontent.com/fife/ALs6j_EfohSUxwRa289uf7mDtGhuUuixuncS47t_fY1KG7rfnOE3wr7m3WuHR9ByuyB9nOsj4suaVQjiCGHh1nbigtQU52TICKDLczVdx9OHoHIcMs91b0RIskATIPpKdEkQGQFfDfrsqsMuB51kCk0iTi7nGDCfSHa4Dojuv6Ub7xTfXiDHg0m32KGXMazW1X5LHLdOtlVj08jfjsA61dKmhpvWGtoEqTrGY6p9h1S9sOt83hVKsBzfIHEdEiDpUNQy8T0PioYyMGBfMBG4gtEdVWObdODcqzc8zVHzC9PIxONnAPJ5AXXAYZTzhYtDXvkzMSSv1jwozLR6aUq1LTQb4tSrsE44pfqn82Bvg1_cEAzSvwERydo81TE4sZW00Nd3QhiPsdt1hcEWLAUiWBwLHW0HYakigFazijk_QJ1QBplpUp6S1gvvP7HyAmz13Y3oTUi0-ZAOj72068TvNALhx43jzAVSZbhTsbTw1_yyZJNtQUXm4zdbfUV71r7OmSElEEh6UqBcHGo4Ef5v1mja7X0CfJNZj1tDJHL2A5XE5W4SntWy5xFOfYP-w8KlvCDFPzGkvz2S2xBYYnGolsTXaYFxQYJBQ_nf5u3aGrb_di8fhdqX1uVUCjonIA9lW_Qx3z3R0MlN2SKLoY6btrMWZJ0NdnJrH1Eff5xUveF_Q1LhDNDEm9dZUBkfqCi4qrFsAPw_iWH5IZlc6cXRlpca_VdWWGKKsUONXTpIuiKd4vCiXxHRkJGKHJAPMlUjNeP8c23X1ORt2ITBHjGkNXXAkqpAMYy_RE5D-PGk0r3u3KtEq5x1NOqAdlzt_wHuvILvuone8eKCjW_A5QCCO1wCbZVPAXTAaKemeu449kiLj3QIZiau0gmkHl11dA73DPM6IGMELp5KkqMhHMcF3Rks9niWNtnF6QqSD_nbmdb0oeNzuOFifeprI8V5shEtczgAQsqhhEZGhU-n9cmaVIzO1rr7w-y_4NxPKjHd7SZs3YHln6YUdHDI5laJfWhIKayr7iafZgKqpgs8S2bdpvec7y52DZN_VH9l8C5M3KH9q_OqszHdjrE4ygxcl6txo2n2Ox7UGnRNUEQAFj3OIJQAofDGGCAxmH1AtsRKM7-B91zFDpBpHGboiAkvlZ5AChnz70vfifDTAmTxu2a8bVkvx4C7JXMXpbXe3lqIbFfCGRaJA8oLp25Trl2ngh2-T_r0hIQBvROBYJmeFmC747cW5MOy3Ewxsab5SVI84mMax8x4Ie0t3_OWY5jtUDfCrFYOkXLNAdmB6AgeUgFvtEuDwE-tsRfQzwJ8kjQ5sxy1MLZ01omK_DkrkibeZGIH4kL4yv618cvpeGTVPwHF-DiRhnkgptDGYYGz4jRawGAo54ayGh1Ja6U3bMf1bszy0wlrR733pJJFgzan5jK0hoQeP3Yqe8Vq8MvwQ5dxtBd1un07sYvV5L40FD7dFjpJ_EVwKAuIp8EA2L86YA3oird1u5Sbr8S8pr2QUvTd-5EAW5Y2mIE2mg9pDFXjz9rAW2aznE6dNMj5fnmAJob4Jh0ZzVx3slndu01fY_JUoh3QHu9aKVX96fPiMLtanEnxf6iEqJC7LHltGTRk5no-sq166nnGx2UDITyEsrmJkzcNHWeosPOwES7Ki4BdYA=w2560-h1355'}
                        className="foto-borde-redondo" alt="logo"/>
                    Pero siempre recuerdo lo mucho que disfruté la playa a tu lado, y que siempre la playa en mi mente
                    eres tú.
                </Animator>
            </ScrollPage> <ScrollPage page={10}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                    <img
                        src={'https://lh3.googleusercontent.com/fife/ALs6j_HvqzsOMUZZPTLaJEIMyH4O8Px7_P0pZesqnxjUhtDKAdJLC7K-0nRxBH2Uoz5H_KrGOzYSOHLdwXhhpIdbBYWx6v_UnFNDS9xUsC7uFsyNCjYxzBNKR5p9bZ1u5_Af2mYb4ODyiQOiIFR5VszRjxHKUoSjkF5aU_fEs4EpPuAqw1eViZMOB-TzkhkYxl_mm5jECm3n5-sXY6Wagon4tB444C2GckH8ah-9uD0ZX6QCzdiAmPujuxObd5i7nuSqolYOA0ExLVM74cwSv0WsOPtycauCQhC024O18ywUT-s458KZ4xuS2LjCwdLWwo8znLvO0Xo3Uyoo360Co2D7ajU-av_E9199jaa2abNXOdoNr4lBJtkdgUuIDVZqq9Jhzo8ka7Anp4f9ZdvERc1oStrLVHXILATbnKGxTH9-Ob59c89xU8yoNL0mJHG3ByMdFuz4T4gB22vPKcYfmoebrYXJN1RyLdnvnmbTLwMwsJcUuOn-fYY5yRjdzgbASUvtIz_96jUi2oDqNOPjQzCEG0_hjqse5gIjalIycOSY7kcc1r6eAx2wt9uewSGscw3_cD5bl-T_FgSPNuo4RhgxKZ_lnE6PCC1sxbR7kauwJvDVkG82vAFkGFST1wAYg5nUHifb6WkPfTy2Hh1YuwZF69VlyYvJB2CA0EvMhEmjVHvCpJCGrY4BrRO4GWntAWhACSqlg6dPqyDgPyua0Y91-4z0S0Q4Ri_xCezoe7LZU1npBLiUOzCC4YkNX4yqaeuJKF1vNnedNeF0n9enQkoKo-NIvUbSer-FjI2BlX7kaZmclDE2QF7CNZcFLzd88hGRTvKENdbruok-s6hzWZgiZtNMBQHwngH5uZ-YLu7pxVQi5xRSdwm6coKCzRgCse2DiPSK5kju6EXbpTuGCcbCnWhcay6X9KDFDJd45_5lKPjWxDafWsV0S4HGN3UYTFNH_dWLzxu5p87g1VRVTHJbPwwLoGxzRU72QQu_84YDXfvZi15Fqm43FrwNKeXmSXjAaeRUJRTxVOSKgVXP5AWFJfM5bsSvhdecIAcCcCo5E-9oU8e3auOvCF84ZrXMJovaD1C9tNJlnsVubGx1EZDQ6pu76WnnmG0R755QNJ5mCy8YLaLdpjCLaOR5NmEc9U4xY0WqoC-YP0UFfrwrkEvklLXM9Du_MxY1GXbud8GlAUs0hOpU7Y3U6SCLZr1PLJ_WQZEW5ETbn1IT_ORYpKVdt7CvzYtA2S-6h50egmD2J_P1XAl32P5j-UPCdv8uHZyEAEBL85nmncI8OG6BM-a6-vnuAYUldujpQlrjx-l3Jh_eBzg3mgVS0yBaNrBlhV5Rcx4ygwa9Xlvjb3lgsElt6d_RhGFQJwZPsQtzuD_ZPT4zqEzadILohvMHo2Cn7hjjuvFMFI5dw37sN2T00mDamcI7LIzRIyCIP5TwT8dZsznE64fi38unUJXMIfiYzogEV7Sbg3B-ZKPh64uiW8PW3j95FNfyee51bT2_iQfS76IKyTnYkMyA47zB6m_3sQqx3bMVq6JDoTJflsmHCEGnGjEXUzGdMQpjMX2OeJyBOx6iiAnO56u1hGJ9YeqvnMXI5v6bfCAOFCXV_ZiP6YLrycJPdOb6lmcsCAmnzbvZOjh4PaAouID5vd9Xxw=w2560-h1355'}
                        className="foto-borde-redondo" alt="logo"/>
                    <img
                        src={'https://lh3.googleusercontent.com/fife/ALs6j_ERCYIMPY3OdgV7HmI3lL-pTgg8FA2EdnVYdQu4nyIQu-PV-YmSz2EITiyELuQDLE126C_3OF2tV_kPnldai7S0G9gGlLcob1wA2UwTGaQPCtEFNSRHV2IZb_la27Ue59CskWj2EsAyCjrl78KCqhgVYE96gPwLkzTVbERFvXamPE5Qv2RFNS8cJVEe1eheqx4_E2YCND4SUVisL8dFXJQPQWTo5Wp50tLOquKz8YOho1K-l_KAS-THEEUg8xFt8TAyBotSa4vtHdBw5I6ve3cKWqrU5JBylUulMebfV6Jr_spkkS17DjuHQA-EyiX1SiM12BiHyuX_lyF_p8aZ9m3sU8yKSawmm3dqoRbcvurvmOLojuWQoc_CdBVNvQHVAsOeDPQs7H9wBBWBeEQmKUav2WEHfrlcdU4c_R71MSKM4ZHvQNTzBTwRUSnDzzbIWGIwWMiM19MqkJGVHYbz8WmCdPdcJI63Dw_EvrHcQcfFdYsUNYlBJAb9pR9aUjENLJFuMePvBeT03hpiSxZ0eoBNqSQWmf-XPRQw7zYPG7qcifPge6Ws4U3NCASuKwH2WALLYi83esqaRYbNKgFLESAu-STYJqVgoo11wFoZ_aVY2PEFVvZk6y81ZSy3cJ4aSdzvxO-EvLBW4VZhdXiHHp5yyIIvkRcvAIByJmVCwA_fbC-eSTH6BmMMgUP0LQM3L8EuAci8tj_-BuONvgCGKjNje0crajOG9Uf3g2YElfuLYyZNIkvrf-IatD5u2VRsZkanKCAode84pCsmSLlhLLuWeROQBmmVKEHF4uxxBUmOJBVGQ6whr9FT9ntdm0y9G1mpbmlSgUbKBvW2_V0ChJWxyaoYMx5zbRpXbyKHuqsUJr1JUKCGFL2EuKMmPd3mWCJozdRkE2ewSJkZIL2nERp0VEZsAzUtRaSyHsHySAz9W5oFC5zVnuKl_2iaGwawVAbIa55qwr5zFv3RxVT7HWVlg2Qz51xjEVl1YX2zIluIXpzx_CQFj6JkiJvKPg9FZr3u9Qr7RAJCsKDWmzQzortkG3zLbvbN-eA_AlPtdwBgBk80fhOb70k1ezMvd1Q8L-tbuVOmHpwwoNK3V7VOTX-ddL9pR_I4_fgiuPxLdqLM66APcKlhEJPpyHexk4h7QFzxu0CbRBMdgGOZItGfUx8I1uTxMO393IZHgtYuZEyZL9zdJ7qMRVIrlVcIEgQGh7kxmP_0dPsQILdmTmYdIpVyXb8yTgLzd62vUht2v5j1Qnyizvllzt1oKN8U66DbPFbMBQVWnYHpvwYmY-YyaLV0CTopxQmGm0tJs4dhshZnFXGRHSQ9OXJy-sQ_EyAxLTd5PZfJQw87nI8CElt4PYZhcBY76NGw4zYzeSdmA-ZiebBmXUVarCjGLN02OuulCfkJalGw6y57v1glQ1-IUvOiRHAtH4mE9IQ3ZQLFoggwePjmBrgAzWD_8tZ6kiKjeVR_Vi8m5YKbb5TQu1oqT0k_XKVIaRyvjZ-ZeK3Gz0dz4GXYgAAWKyrDPl7QPa0Um4XReF_OOJ2pqzqlDUdDWJrXQg9DacCthYTJ2gjtinRiG1O4OXJr2dK5zBKDyi0btX1ErowMwfSkBk7uhcGYO7SAvdV-hQW6bOcteFlfaYAapydi6J9cxbl0=w2560-h1355'}
                        className="foto-borde-redondo" alt="logo"/>
                    Y todas las siguientes veces
                </Animator>
            </ScrollPage> <ScrollPage page={11}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                    <img
                        src={'https://lh3.googleusercontent.com/fife/ALs6j_FmNy3530S0YmYCtk7SyIK6ILoy-DJQSFGLzl98r1g59CucxTp_i7RNgVvGLwzBAdFT98UfvzqWRFinc2pvZm9ruibz4pELk4S7_KonJEMuErdw2I8OVSpFelYtKECgvWZUHA-cAFme8cNEv59vNvQmlYbr043SuQVb6bzXzvrX-HKlZP0aB1YBIxBpQ9eMKKXfN_FTTofwwpzSX3OV51mwFrfUokDSrB7z3elkqP6P-OtJrhyDeIHRcb2PNmz3JkQa1439_KK4xwhWaK-yUmHB50IlS7Sm8WJV7gmq3ZSq-JYRBmwuMdwlE7xL7LhlbobC3DFgVs5jH9sQWqffX95rhrzNQrxwYCTBuwtLdMXYTzK7d8ifPU7NJGenGTJQB1KaAVcsjyGTNTngWOmmn4HPHHXosMyKtfs4P-5kzhv0ZpZY58iOa-_vdjmLg14nKOup1_cR4OzahEXJBx12tFYbgIvCeT9EsroOdD6a4hvEY9qw8UiStms8cnkbkMFtPsq8_8aJciIyhTDN8UqjN3inFSmQXZuCjEpji9FQz0ntn3H_Mv4Of-zfu9EnoD64O4QHdhVPjSprvznvyg42XnvalFu_WY4cxytJ03e4prKrzVT_H9H_4zV_WHN6IJ7GIOQgmUNQbBMU14It8hY6saoZuzBbYWs5kdieu5Xr7IVX0AjCI7KT9k8pvE3_DxKDCxUc2rcjK0XeDOxGFZptKxXJdUE13lYkmW-caAjqUesFqbwhuNYcK_EmJwuZc09T-535zhVwWEYL7mrcQaX3WL75h8k7HFNw-IdpJCGB-nQL_sASsY1HCWUES44y13JgAp_l_rfp__STZ_DJ7dCH7D28bwndp60yRdojj6fFoe8QqacbZBHe4Kdw9OMp-m6T4xEkj71mP0LzUVG-kuNuErn8u1aoKSHj0HcriwOL5Nn2XpWTpVKkCGRITKubhhNpXPdeqVazqUUQcQr4n2kAu3Hq-mhjLGDssxMoIohYyL8_xBiogScb1wpJAorcqjucYfrLE80aU3RgAorm1TThIb97enAHqe-P92fC0FMIYK-LPip-WJ4bgorZlFJKd0UXe6kXj3zLJ9VwPhjJDhYINZJaNuWz0VMXJB5Ryr1g0ucCxe2Cd7ZN9Txz67n37dFqbL4A89Ku2enMSsmSZHzCMX-lHaYqicI5hUAaiycRQljC5UZjDV0ogpsXi4bzgZjAIRzdQUfq_-y8jFZP6uVEfMZrbKc53r_Eb2jh0KHTBoVTTAeUtL_PCLn6C2joqcxZtdLJbv0XiL-V2-Aa7KM1cOCmC3vw7bGblhhD9896LoLA4EUEyLVbJ_XMuZJnwdIGHgT9uRDOxmFu-LOsR_c0leHW6d-wGzwPkKRYWgcnXfUKBpXNM-hpMWV7gEDHjy31ycouJAEO_D9N4RAIriQF4GyIrg3rY6ZWjI9qLL3H1KIQH9GgkL-1TAHcTOQqLRynA0c44ojgWzE2F-05O60JzGbALybcWPm08QZNeTYQHywvd1TE8GtA2PJanfzlKf2jfaJ7fcvm5AZOox5tpOkNZDvb_ptSPQDmF-l5WT6-2x671Vghh4hh_4ZSyvETktdLUHvG5F-HtKm47H3NQk3NKG0hBs0T9pkL56GvmBxxKKKYU3KMRygr-X2F=w2560-h1355'}
                        className="foto-borde-redondo" alt="logo"/>
                    <img
                        src={'https://lh3.googleusercontent.com/fife/ALs6j_Fe-v9vlYlC8zaNalRyk9XmdZZwxYdo7bOssvWcSlycW6sdxRsawuF73mb7bwkgDXM2rWfckkw0tbBIaMpoAVJAa6RZmdJ5Ok_ysXUJvMP7JDcrRylpC8_4la1eqhk2-h7OtsJ2fg9EPQKHu9PxdyR8HSJky2UiQcltDy2OX_znHQD1Ev5d9da11yTrOoYi9qfsiFjqfruBoRbmLwfjTYsET0VhSS0U-LOqscVv4oaIbtXF603Yp1FAUZ6GA_wfN0b_CbmKpLzDqTvmxugONpsjIsZw2quVcwzuIMvpmd-T7z10H32OLG6KIts8lZD2FZRyg__xsOSLR4CuZHj0uIVUFsx3qALt2RgCHRpUXT3H7C0TBGrE1SIHHpUSsgs8Zs8M5A2ch-lobee1jA36RV6DfgcDQ4_LOaTue_Q9mLSK6uH_SIP4WLU2ru-80Q7RoTSdBHy_wZA-dPclVE4RDctthdBX_v4KBcauGe25iHNH4WLfRjVfH3VsYI9BzDREM5Xq2ztX_OmJ9OaP_Wd1GsVUiD7Z1Y7Nab8O3tAhgKSXVF2F2ULbeX-0DZ9WI_dlw6b2XXEjoIBb61x_HBXVcG7jC-myi8MGhqBaUGTZxjRinvQTSoy0dVjxoT1NW1Spy8DZ8hvhzIcdUi_LVM87Fe-yDkDyQJUqih7BFVK3qEhvPm0mSBWcF5lR6tHe9SijfukmmLayCvG455jt32fww1MXFn-G5GBhM6xnn4cd7hH1T-y1RgN7Bjk4pfMpsnGvG1iIMe5dGL0bYQcONGNf2p8hs03QQ0En0qjZOh5x95mRCsS-G6ceYq_FlbVroWhFKkrk-LRPHfONJ_o-HDkzAyXSump6oejFTV3VAMwhXmwiMWtFZA_S5nk3w_zWJyClwV8YdGVJIlozwz5_JfLqypjlM5mQ4UyBdrv7MWpuNUmHI_btJ-_vf5ih3nQN1WynKvs4trOV0Hozc5raxs9iYxDif2E7jcFeZfGNgPYW0AmG_gjrT-v2u1kzJXil6SxiWikywMBwWnoZW1xE1SNKTz9XEcaZxxGdd7AgmjKRMPPwegvkuBLOCBP7bTaXTX6EHZLQXTdpwumYOMFj8rQ62XHxaNRFCCxfxXbVsYHye2uma3lTO5IpmTKvXi5fjet9pzL5ppFhkWmc8fFltibutRp9psjfi4CQ3RKOZl84WwfOoG6VgJ_p7En5IqG_eAPJ8u92UMe5LBemWUqIsRVyrMFQ9u59rOY4HjNos3Qb5CfqaZYSYlTazmELDuwojixeb-PyL3VRiU_z3bv0RHacIAcWIdqOMKMdGtc84T7fmv_Zy_YZQ3PZvl4KmHWlF2t0TNTyg8N_BN3UxlZ22Xk1T77BQKXJP_njOjhgkD4_6WGo4xTwBvGUFkNoEl2GlMYuaGTsRL9186awYN_oVrKTegAIPB8RQIUd0H2nPaPtgdOtSXQBtgtGW8OKio41Pc-QuSJODUIpnPiGLFEgJKc9VdnqA0221G531c5WfKU9vCa76QRegztU0OAv2ifxk7H8Pc8CTG4lOTB6z7glzJ3QDzB1PLMG3WuPuMl7wPemaeU5ypNckNeOJJWUETCH-PECn_gPUr6ndTjLZB5Ag5ay51kMO2FwFxRSNP-W4NJvHf8Y0o8hyvhn-XSYyQ=w2560-h1355'}
                        className={'foto-borde-redondo'} alt="logo"/>
                    <img
                        src={'https://lh3.googleusercontent.com/fife/ALs6j_Ex0jgpwGjYxsI4xLUOWIx_NBbma6Y7zzSTYqOXxrYvvo6UiZmJqsz40SGknm4qPuy_ueQw_GylJLgc-dh9PmZ6nBpvnjLmwfSoBwFNsSa1Sr61oGXxJBeoUKDdQoQ24QpmrSjRtL5VR5RXn778uEDn6eDzmF1DExNJsuYQM6KSxZlKxack1zD0ewwlkS8ewvUv2hqUiG_7yFXjy2rn8uY7SrN9ANrnmfqimi0lQfdvD_4ui9G3QnkWAILveOhzwLXQQNd-qU9Tdj_q4t1UMXZ_n2KSDmXmFWLKNeJz32KDbnHuFovY483bI3KIVmzyafo5WHzoP8EiRgz6ADv1oZcG5T6yd-wYK7CUM0IypbYa0fR73vr-oeDhT6j_5GGGfWxy8tmjAwh1xu8otNie39dfuV6-O8fOfQoRfp6tRNRhMd6MHysj4iPflbQJ4ihDREg0esY2qydobKamzoLJhmx5KOo3dfjmRWFLupttpuPgwPvKwekW2j_CpikTUxN1YxNhy7AkZykWmupze0FUCcSp1rYLnhFzT4yF6wZNiWifak2OIvwm8KhphDyQWKL97z924ecIq3D3Bm_zYGAtbxFa6knIGfhnTd8v8OWOlm6fakV3f7eOSYJ_Nq_3QlOXb_OGKZ6NOK2wio5qxaNJJlxM2bEkhbP_aaBujTzT7oVsfd2xTfNS7S65pqCoUuf1pGk2tvBNyK55eIi13L-lfSb3nWfq7P8rT9rlIJIeGWNNoGkXknM80mxwTH2Az78An-dc0YL8JihOkk1cs6CPfSrFgRWbvqH8cmQS6rbFiZJyP7JsJ0UpqcFFq6agkVzIFX1cJVl552tVCn6mZonjfmZi30v7qWRkxWwFs_FfHyx1kKwlgLXw5wD2QtiXF6EUbli9LG0zIKTsXmlQJxVGbvtkzxm7IlFjqGE9o89JIElslHvaf_aomMo9GopIPDX0956d0LxUFOhUjC1-ESMCK5gEFL8JxuSisMQwmgPiraOgB7Sn-utPH85pjKq0D9Hvh9n7NHSPFLHxvZTNAbcmYIzB0PIolm0mgAmS8fE2AvLUqun8sesK36QEOlFzG7hOBf7-fszpCuTlTkk2bDaOniz68Ntzj4na-FcniCQxDQUc85hDNBkL_lxErUtIGeuiXehR3frKKmudtxUWJtqw4EyxuuULjK20Nr65Nj-Fkq2dDhlZBoy62in8j9tqMSvNwpmogYzwLdPu97WEQnd7qYF2RYy-VIsPsOVfusBxVYG64oH2I8CtAj6DeKAxcjOUVPoAdXKEEmw9n8ozjwoWdmihlw6xVKlYy7_QbH84e7qwvvDu6XpNOtcl1B-I3vkCDF-VXG20lWjfuR5h5XIHj6uFZTZf6oiwXr5rcRkK3KGs-Tlsu7ZHhhRfKK_zwDsQVmdNzH-kB6JQx2pjT7lKA-7YJiz2bxTGppSPBdyzcMMynJAH7wHMZAkp3utx_ACcK83jqfiIIwOlmSvSxO45_a3WkVUxalSiRRQDZPBFJwdA2Sh3sOOYfCm13Gxt_Lo34luzj4Mq1E4Q_a5hHfbL2XE4p6smFEs2LQFcyNhw6hz_A0jwWVNrq66YscsNjF9ghyP-EfZCTIjcje7y_2hmyeooeI2Ll6hqrTk3_91clDTuLe4uy8WMw6UANA=w2560-h1355'}
                        className={'foto-borde-redondo'} alt="logo"/>
                    Así mismo amando todas nuestras salidas
                </Animator>
            </ScrollPage> <ScrollPage page={12}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                    <img
                        src={'https://lh3.googleusercontent.com/fife/ALs6j_FvwcJkbTXHJDaICU1BWe3PQvXOI3LznO3pIubXTtibqjepGNaVgd10vqnAyaSQbB86hT9Xpk6x7DjoMfjpvL6hQ6ivDr5iOLmCDNhRHlABVzi-D0ioLdlAn02TsZQv_8w-eKlGQ11xPkOyngtXRBcS3Wzm8Rli7zsGUGThioJLFNxXWAQe-v87m7WBiv4EkUwosf_-FvbFjkPuv68jUPApA-mMJJSilv4KWIJ403OJPsW6LBaLebsZOM3MTvGyaGHpQG3aikXhw9vFYHPRyYcVS9XKegRz6ACoL20aSXK9FSMQY8yROKUm-DDqCakwKjhT8Ih2psyrzox2wCbeFoORdPaFMQE2GOSHIRCekaOEoPGAoxrpZYz8ETpF0AwjeAYT6vphKTTbvKEaSelSOkmrG0D7hVNmAjOiXvFjafuevvNAPsjrXWsYL8lg9Z7sveP35yuDQmFZsKGR02XFNe8i9aAd_yCYRX1tMiuhGEtoWLNVKp74qXmYc9mMQWnVUe1Xi7KubyVTStgn12hQ32wCpgTOpm3216JXQc47IOuJDJ2mKqqM8FLh5mnmAg_nYmDJi2byTWmgguyE2BuCRdYWpz8DSCDcgBCBKSlAjg2QgUFHagYNtDRnQGbGat8x13fFANTZLrGDkBFgu9lEQbqjawd9Pb-EEjWjjlJZvChbHPRPGVUXo2L2B_n8shKe2C8i4fpzatCn45w1_z2PvPA08RNMv79zXFP-U2UO1lZcDAKYDrJ5SnIeTnw2J-qt-aNS115TYpKA5MiLMj3wR__l9Cx12obmDbpQDgh2wkwA8Uvxe1NywKRwrrtPQAhzwQWV1_fCnRvS9h5CKAx2bRWjWl-2EeGSxDq0-hHhnhE8ElEAAl2wC4NKl9xZLeMxESMSJirqmOlLcEyWgcx7k6Q_vqM84ABPgEcHxLWD3J9yceQWxZr-c3294i9nGfZ5UNkBiNTlj28qlBFGyiT4W681TjfkgQbkw19aozOepOemy2fDEPCe40A-PmIbL6SFLaopdwT5EEDBMvCpaOcaE2eF9sIELzRdWhLxtmznFLt2dpPdrbnVWLx1ixAnPfIPA-ARtEjhDvK0Q80bTPL_EjfJW10mYQW-bhL0AxaAl5x2QPL6KrTSNO3tda0MMGKs6QT8heF_F2rft3X6ijzz5xYgCzAhxpH4_H7-YgZ9FBgKznr5wFGLe3ENhakTWX0pGHaUBwRihtK3Ddh6oBmiyvlW95gjyVsdOnuTxMyZpo-haFuVyWIH90_WkjLfu5tCa4ynLPcOwnpKqmG0yDDCSiNdleXUJIwY1iPLJFXQVWINJ5yGlTM28tD80xmrKWJlhJIHw6RQ0tFO2drZEc1x4Yc_RFqZna8b3TfAnPpgyTODcCjp8AzaI0-NKZ2ZWJ6QhKR1ptd6TjuCAJC2hgDmF6hBMsd90m4PCSdeiO7Jx7y8JJlu-emJ38uneG8u44q3UXCzYR-VGEnV86bUYVu0g3lDHcTFHc9W1ejlyviM3TGBUvawLEn65wug8P98r5OfgfCkxv_i3Q30baS6p3QcEgblSpR7Eny-0xynGYxqDLVWD1wVfL7S2hxjPhRg8h-GMFpHEo1Budx2X0mBGjhGzqkOihgy-TLW4oWqsFfxBJVeb8xczYJ6jtKr=w2560-h1355'}
                        className="foto-borde-redondo" alt="logo"/>
                    <img
                        src={'https://lh3.googleusercontent.com/fife/ALs6j_HKP8IoJyFexnIflgUTqbEscqqd1zqa6-rgqIYtzm9nTrStZR_c0e8Y80kLdkYa7BxoNaYWy5KrbD3Tyiyqbpsz36YE4UbWSyavR65xekHt4oLDJTEE1bTD0GNmYcWLMUCmPxE1i35p32ovj03HK8UoRTat8VC8IijoUXmTTU8tRPSsdEUHFuKB-pxj2ptjhmRjN-rK9Yvj8OoPAOC9EWYOFNmhWoJrFKwD8tsMOqvy2baNL5nF81FUHCq0JpA8JJeIQ2cf2z3DN_dkPjyVAkFSWOWH922SNIgbMzl2s2SN5r4z-oMWD9jHJ3IK5ybAYWUtj8destlEywI4fmUNsU_OL49-igm-BU8JcJZgyrAAt6-L-SarFI7eTWinj3mVHGotdq7dEzj-4KHxU8AeY6mTknZw49g-uScyU2lUjboQ6Dr2MOOZGrHdsIvExMItOJrsSV-C9KMAy1wwJpTEp8TLxC4XAEx3TayXKYEx7rzQdL6PRQrwo86jLkWGqlsvzK3Y9H2oStKlpBmi220Fo37s3OaAUuAza2b2_amSi_4U8WSNbJM6sP2frdQXzxqwcpC1pAIR3OM4QTlExhHhHBlkJBq_cLuSmpgsiuWP62ytXsL2H5v7q5U1ZvIacRhBcpbxBRSALmsO5XKqkjFD3X088dZbrhEwFERSolYZnTab-SAMNE9Sn5KZBnosewuZ65AmrgVl8ebca8MkLZD447JPmHBlm8jDItfK8GUqJqM-YCV6UJ_PX5lq7_rOXloqDlAJB-wdt2MEd3thxMCiQMCflbNl1rNqfM9FFcpJXm8_WOe7EryitlZwajeCoeLASSHUmHN2iaR0n190Q7uLfS_6sCKTtF2aayE9b6AjX1FnMrlCF4HK_Eoeha9B8POgAAKOgwNXpT2OcjcIG9I9xio48PJ8Xi6dXCT4IN1xVHHc9W8PMnZ7wQwrOQU15aK7v8N-FRj2faDRJkrNVmB--M2R6x8pggXxWKtxdEFVx-Yf73a8atVZb905_pABs7rTL1yWi5zgjD55r4f2pGrZ3eRVLS-R2iPrkj7erpiUmNzJfe2_0r0OHo_VrTTBYlE9jhjCa0pctFolNHi6dmdjmhBJYEG0Vb__11MlaGjbw2Mt6yCpRnGqD-0Gdv-EbdkuQZSh383y2HB3tS_29acHYkLHGyOpUEjlO6_dQfVF1g_JQ_PfEs-qiBnLkRi146n-gAVF4C--XmdMMHlzxQN8-mS35ltCz8wfxaP1DQrTKHm2UxISICdkXRdfc0MixbH5KPPsAPpoGEzsTWCE13dcCkTBWhNICVQazpkSMiMYgopG5vp3YOTU7ffJKtI9fm7mMG-7G61BVNdwU54M8Xu_uJSNwYhqvZjiGnjuNrMqHrFfsoh-cPxaTsOHJrMLnaBMlQCDWqmh7D18ySd2PT3VS6ETyKDqBcQ4K3B5kfhotV0OYWH-MMvcMgBgMUYp7A2T-3q4JMxNvxCJzcckIHctbOs6wcH0PjP_85eLxxx5N50g2KW8ZNQ1tG7KlvbJypJ9vmvlgiGOJx6T295TjmhN1GVMa8S-YngCQXBt9sx2I2nsKVDeH-pO0SMNd3myRGKzaiRpASFldRAUWfdmPFBeF5vLMhbpyE_bwzeOaPAMgEqYc7rer0S-MiwPCVy2=w2560-h1355'}
                        className={'foto-borde-redondo'} alt={'logo'}/>
                    Pasando navidad junto a ti, que anhelo que sean muchas más
                </Animator>
            </ScrollPage> <ScrollPage page={13}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                    <img
                        src={'https://lh3.googleusercontent.com/fife/ALs6j_Fuh-C424qd9gtWpBBckAnsqOwaCTcsPqovf0-xEXohK7AcrsdOCYunyroNXVzikIZvnMedborICcDqO3youKFynWhR0CKbaI4me8rlc_Ql0bOtdgwX3FlF7e_2XwDSGA3nexVxK2e36Di9sKEb-vwxkpt-PixcgvWjU4JE7QsDIAOgSNrWh7P6AtSi8zMxvc4ovnaOAPt0_lo0xvH2_JrpufhLu18inU6bND2ysMyz6T5sqxY_hfr8Gm81dWp59W_oeKE8-jHLdCbSntOVom_Ao1cG3fX-KBSSHc3IMNhzGUxz9X8SamUsv6CFqnlCzozy15B79G_GwR3UkzYoC-MJdaVa9JNOf8t0hQ88d_wCLSbiQo2o5rnoznFQGx9LE4es9mK96ccqROVGfg7OaLb6Ud0mju0lS_MMHsKBPZcEv_0ZcA59SWnhnLfwvd-0Plrkn47o6vTW4w4RItAgpr1Sdb8uzZoSN4Hlkp9A7v8_SPVxO8Zs4wvssN43knP0pnHRBpCtcMrz4ZFk1N_7vaE5FiH1H4UAdPokPzQmn9ac9uSKa3hPTnk_h-ltpySrh3kzGcpfxmPmNpsFmh7J002bQr5OOirxMyCA62tU9xh_lxmkOuerUgijT5UKpFf7SBVMAk6KntJVLgI7SIqVgBIplhbHlW52I-KrJeYtyFLPGM-iTIvjz8mYoaafaliV3aftO-uEpGL495SwyCczYAwdpmdau3dFwW6Fv5W4VoZeYOIVI0Y3FK-8x8HcOZyp0iuC-7uVAxZraQWOI-uowBuTrtdi6il-oSltWVq0oWAv1TPMVRthMb2ekC_Ha07_ssooX1j2NawaKu5XsiJ_2Ju084lsm-v0bWoz6l8fSGKmRKGb42onkdxXSCURWf9Jwe6tpvcxHRZQvQGFEykIXkUYqfj_tXZ1byMyjjCMyBouQV-JBXwLy--c8NlVT5t5Vt7lkKFDX1P5PrRgnpNc-QoH1zlWw42G63mCUacdqq-DUPHYyumwaJhvsA12z7sNRq8wMfpZiCE_uIAv-X0vwrgEymBQ6Bl8khKtnVw411tBX7qx97xQOpogd5OUAgKpVkA1TdcaYORWZbmbgrfHNnJFaFj3Pf2lPoK9LgznjkEsKC7BNMo1lUCjGsCVmGZYQkVcaqWRhP_rjTWYGCfiiIubcwWDhuJM8ANGLARa2rLvInpMvUBsw9c_yDL-bCSkgm0pogacKJ99rZYe4U_IeJNaiJX1IE3OkK4a8Sd9Git_eWwJTeVQQjrTnF8IE3VZyjYuIofd3FG87_OzJpKOGYKudkcqPVJaB9ZaGxRfYp-YEdSutENVnQNJ3apIXvH3ZvsS0b6y4b5x8jWEZuudCVVRvy97AluLVuHWUxyNLWDUBVUSj-9Q0GumR74VItDjbUnrrKeaTlR35z37iBVZ1t_IQbEzKvor1SLGhyP317lWHSzD3AXXN0bMYWLrWx_XTwEgJhHIFhWOWlsqKuCSIKhM08DlPv9vDxxY-cUGKZT-gmxSYlchnZh6-PPHvG0SxetTo7bICXNjWbuQwbkevWGKC46h2IiCmD2n-HdHjIB-MQMV_jpSzTdwvY8Cd0ZrqZ_2-rXmdmR_7MZ1xzvBW1Y60PKMYl98liT64FWe_gzRrXdE1Iar7iPHCw=w2560-h1355'}
                        className={'foto-borde-redondo'} alt="logo"/>
                    Recreando momentos juntos
                </Animator>
            </ScrollPage> <ScrollPage page={14}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                    <img
                        src={'https://lh3.googleusercontent.com/fife/ALs6j_GiDrqNBhi6kC0Xv571c2AXZ-WOvmu6OGmGK4FgDJkODTLz8XC6ZrR8mVlVj9kjdo0SjQWAdtGTmESeWaS_HrF4r-jrGtgg4SB0RQNSt17q-BaZ_5zRjmnNa4RwKMxoVBhWSA0zlxp-hLPzTRuXnANBhA9cYNT4MBnwOmWzBmR_tSc0vBpR4ERj2zSzL9Gn76yodymIhN3wTabVOhsJbv4DqPiB_49EDTKxEXO5G-f_ziQk3yX-XzeiSfX8_lRZqIIpm5bkQ-_39VtLSV00Jqa3sI8PyB7YnOH3sPtRDPXIgFR0kMzq5E9hxcKA-SyBdg2ZDLXG-MH4fXeDRe_QO2WgW0ThoI1kdLmC2o3hYCkKvn1Dl_35BbSTQZMnaiKaMU6bV7ow0crfyI5ZTS-0qnTzGDEcxM9hT7bZiHEBQfYLlYvwx0TI_ZP7ANweI0vNGjEarFeDEsbiRT6aIG_hNfLkqm_1UWcSuMaA-QjbFLn7rb846nlYoszxp4UqkFNaTKRiWL4S9tPgH__xK7qU2qvjIef3tjvz44IxroqwcaXRKistWPJ7fbG3I2-1JbNQ4hA1oo9gX1ZzVzi7NUqFV5-0GkXTg3ojqzC-AKdvNEr1sQWq-f-UM6kDhvWa4IHxZBClSyiIadrXU9vj1CcA8PdUqLaYTV4chUcx47jFNdPG6yJCrIEvug9P8_oZVSs-s5AiJ8lepuVHkEfrbkn-LquAywIv1PzO1PMs_dCuiwEAwSJx9kW8i2XeZiIvy8VJIZhEqa8JzHvExmouzLihDuWgx5_Q9ro0DISPvzuawC7Q8ruxVulb0tI53QdtmhSfXlgICQ219dzIFJ9IT5n_dKXSoH81_uRFf-PXRK1ZN7c7e1MqQV-9R1LccSfLT3YqxuIzWpWcsYM6AoVHxYp9zC7vmYAdodfdLUNW4cHUWkAMbMTigtSaYv7cV-6tPn1-whJN6bQqBpDdVcZsLUgtwQK1PRNEqxzarKvC20ZEtfCeXV1Iq54d1VgL_S1Syh55nB6eKvDusk7EmtZKY7sAnaJ2lcgnPeWmISAP8DkWk2QDQaLXwTb00pz0-JJioF6NikTe9xdDlaYmZeLVrKCZJHdJzClTlLHzee2DFrkD56800JogWDba3oywJusgpdLreNVtb0a_8ljoCdAm1ZuGCPtcCT_m8GtEjH_9OnChaVSG7SNFfSivuKPMcNvmackfjFZ00q0PCohSLORUJKPy83xup6FwLThNJZnYeC2tmwMLQkIKCwC-Mn4x6CMCH53k_e63mPxZKWBMCB6g8fBLchSJwg-CVoXh8NEnXvjCSFFJbOjJnVeqVLcLn7j4nhLjdZ_rSMEhHKHH1Vn-Ufd1oroe6wd9lzKsB7zOtvPye7hJu-vYaiEr2D8SCri5aRFzGjP_GLfMLM_RWHycblkn8aB20VtvrG8DHUmj4RW9M5nvu0F1c8-u1NiPzp9uqOLgbrYCxuqM7RXgFyYbqjl6PQgJHOKasXUvD9PN-eGSl_Gs61kf2YbSR6aGBPYPTH77TfaD-1tM21fW28UHbP_cR2TQkzIlEXAZ8BYqh7LPIV1-jrh9S7n1GaBFFQW6WB9Q1PoGHovxKw1u8q4LRbVdiH5XXfd67Mi0cEqZzqFcj6nLtEkE5vXnmI3IVg=w2560-h1355'}
                        className="foto-borde-redondo" alt="logo"/>
                    Y vacaciones que quiero que sean eternas, repetirlas mil veces más!
                </Animator>
            </ScrollPage> <ScrollPage page={15}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                    <img src={'https://lh3.googleusercontent.com/fife/ALs6j_HBh0aaIcKKAS6GXAFW0sBPzfdCe6_H9m9JFHg50yCgoKptGdFNRhs7E8adOWxelu_psb5zU-OJJz923jdckwYi_b4svcOpTIIGkjxsEyRbdKWPtBinyNSJLbJF-jI-BFUE4NVCyj0m1uvLyapo-QSRWyfrWcSBDRQRZWmP9MTj294RV4VAxhnmLE0_ux9-aZ5yHl9-8Es_ZooSzDRSik8dJwez60EvCXMZZP2yfMhX0pGEfnjsmuwCbyYP4K15SuHAsDxJZ2k8tvMFvlyVz402twaW7yypiw5xD4R9LQfrR4ldo2u2MakCt6-kZlJlZ1YwIeaBed_XKJSYCYiuVg675aRCxHMJNE-wO8KEhLbh8REiCN0EbkqCKivkH2nAjo7w1iF8O5nli21KyRf8D3BrlUJTFbDySjUPhatkswm4he6OEEL2UhoBXUIo6nn1QjpB7wWTJH6TWNzFU3K2bZ82VrBoFb5LXpwNRc4e5QqgGk5jOSF9rKQgyq05a6oi3qaOtRoWY3uQH6mJWcvJhXJcfnSsgdXSn7ACTMGlRdTyylEukNVqWS7QJnB7aMyul6QKU6eMTFwFP-YRTHCX7IyoIZ243KzftTues-V9CeHmIlGxZ6wEZlWHKySlqAgcefNgdmZNRndChxmVDAEUyt34R13nADbazrfWQqQknMDfHbfM3HQaUtu5HfwAeESOtAWhf8BfP7-gMke2xCe23M4u_55iQ3_pBWS6NNv3bABXtSxMDdQClpWuM55iOvWX5NTyCnxmvq13g0KidHh6Himu-fLuTM2JnFcly1PaD4DRYPrZ7SKuKYSILZghQzg6aYLnla9KuhJV-Q0EsJ0f1hjwPSUyg07qye-SzDyKYqWVNv_PTI2_LbaQxAyQJ2WHKuinGlce0Ft7W_1szgzlSU1jMqaWtfmZ4DcKEcIMn8OVenVEFVi1yOKMA7SvI4VT-c3oS06G8418QbKMxawEcVMFJY3I6npTL_k7TCWkXVXIkukd59Hg38fcwYPVJgTHPy652JfunWbErTZgVGMn01-Gb6HYD6cdZ-mG_77XNDFIBEWZOzr6RpZkeXBiVs6YwM1-uUhXqBhgBnYayphKnk3N7AK9gCsLhATZYU2TwU5Gx3sd5uSWbHI3eo7c_1Nus-OAhOk_-Sn7qm6Ddcu3FGFS2aOIi_5BTlWhBzxUA6hMXaUqDx5fyn4h8ihPwzpIDnack1NjtzsYMq91N_AYr8yKQqiYmdwpbPz7DV6Qdf9yF1jySMCO5p9IN4vZ6R2OyPwDsm2L9uOXvDaQVN1PAA0_hNdRlEjnG57kDMZCZQhHbyASrVMkyZ2MVyYaPO56xWYtVIAUA2pLO2UqNgbkohrq3aaPUybsvbBCMKV-BIL8UCZ7jZ9P-xkw6F2OU3MNt2UVU_11qQeclHB5Z5qVYNf-eyvrAhqj5mwvJvqJOO6gPS8r6VFxHZZc-7hp5E6atgdcwN2bPFUCj9_t9t6JphhVJQQ4nGF2kORrT00q26AdGs4mAH04tBQDjYlC7gd43Pa7qH-waWt_NySl4mr1FBKy92CDMSVAdvgniauvE_VqglKl869bVO-O2lUSseHpzEXCfRFSYlaMfz5aYKgYamPfBTg0qTHtuOq6JZfkoZqvuMCIkFCLciyKJA=w2560-h1355'} className="foto-borde-redondo" alt="logo"/>
                    En tus brazos (aunque te cargue) me siento como un niño.
                </Animator>
            </ScrollPage> <ScrollPage page={16}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                   <img src={'https://lh3.googleusercontent.com/fife/ALs6j_HEHAFTzKc_FCPtmlMQeRroDGik42ahuyZSC1RklGqnls-jphV30wO1Zdk78g4Kp2Y_7ERQ6tmbY-dzGF5IhoCVDbKbHGNDKdF9d_rBNaL9cdxvhs4ow4r4Ww9u_vdjQkPrLJG8dCtzQkRqxd9sezvlXWIueo8V8e7medOH4n44unSpRHknDfjfUHyiYTaQ7kpHjpe5A1174KboQ35CU33t0HIrjmKYueG5XP2b4YWxfa4wntaw9RsBOBqzKooPZwtmWM2_DqyDp7RR8WmKfGZ3skELhfy45sHlJJyEnV6I71qBz4ULOf178fAe454w-m-9colJtyOINmQr52f32XX45OrjYF-S4e0eiwVn5ft3RBXggKKwk-TgHdeBJkR4NlOc_ya59Tp0FZUa0itu6zUAMsqokWOy3DzB2n9dbNrur6KTIyZYZoF8WtaWwzrWTiAxfVt0u1gm4c2G3uajscukw0eH6eg7cWctZ7biKM3C-7JIXd-0bBc_UZ0H41p34ywL_48BDdCryKWG-GR8GBj4SeqdM3pQgUtx0DUuaVobhLaxvqi4OlX6HC0h8ktZ513GAfrDjb5Vhde-L4E2ewzfOCBkQa6_lBRA47gY6zJHv1UA-4112ThxFbCnfe9jsKZm35CtEI2MKqlxg_RRYOvR0009zlMHIkOQNKanzmIRD-DOGOcZL-thkyetejA3lOvBK5r6xFM-pIqIVi03MGayrPPJkNc1oBn-r1K06hg7U513lnEE4xChEWr6NgPqI3num6ia26QXLyOyOK-KjOkQkmtz9YTPlaLj0YzDfMitcJ6RiQ7_EK7jd3sCofOTnLki0fy4QF2fnRz5Pba1uceokcgn3VM0gkSizhugEfx7fqv-kFB7-nGeNtr46q-5tSQ5mi7KHqYOkkdaV0O1lLMUh7ez69ByzR67W4jCdwc9ywbXMDj9lBeKz4rn0VEglRa6gPzxtoateFnHtTsrAB6wWstc-_HJYvRRgLFHRK4XP-bqNMiAt3M9G3zEDPlcWoTs8R-e-eLa2rwgMiLALXndIrd9v4NqmbWB7XFd46GvhVKBScQoSFbizVxLU5Zs-wNa6tDeoAhbpqMGw0GKiW26R2YxuxchTegUOo8eMWt7iM11olMtbg8oKiWbklsp51XAjWbOd2U0zXJRODW4b_4PiFCC-BIGO_ZdkHzPSoMhkGeWSvB3ne5jO7OjvTVAclL8t_FjdoipN7Wt91gw_zO4D8uioPpjMzDEtfkcZ6lpM_Zb-cxLpx3t-4gwCIyS3yRvKeZOMxl3zUegR41vHj-O21045v2A6P4iD4LDYqXhjNtXTEZGa6sAOSgrKfbIYier0b3psUSXB63hWHwjNV46aUgi1G79_VOTCsoYUUlk7sHXcbqaPuAbAp_dRfuxjsG595nAPiNOV6sni7X_aO-jIT0gk4CrFKELai390cKF7EdvwwZL3TGiS0U15e6Wndc2tMhNxdiQgpMBwGBm94SPFJ6IoAUb8hDhWL_5_xLX2Nf-X9vw7X-EGF-O39-g3ZP4ybDg5fiGYvQai6X7uO7v2uI-Vb2YgxPgkuq5zSzorjgF4AFtxMLWErL0B0_-paDud7ht4HCI2xVSoJfBmZICHNLwD9ZgM6gkU-ObqOdDSHNZikjjpHUm=w2560-h1355'} className="foto-borde-redondo" alt="logo"/>
                   <img src={'https://lh3.googleusercontent.com/fife/ALs6j_F35N07UP0TxFr_Ax3jvtFruewXZ2p0AIn43CMRAlzxixlR8nscpmRCtcEizx_L7ipMAs9e6Du5qUDwONrzMyNmJrnBPWIqQwq96VXoyrSeEjvsX0Vei2hjPwfzr3zbflOuYtgFpLV8yIHQ0eB-r_t8jsfZ4-_7fX7tSvpMLIsvDxdJ4F7CYhPbakCzT7Pc_VJgbpzxGvPDIRRvvX1bdZ_mNLcKYggRFiQMTgJ5aA1nFipS6NSpXYRl6Ky0pgHjlJZyvDhkpZSvG4_kh3SIqOh034JB8oyGRTQ2L92NFCleTBLHy5lt9jXqLjgaCT4iTQDQxrTy72xxYq5PGtKQLYPTmzYFh4FTkcx3EK7kdXls2kjYNdLLM1UhP1RgrvAeF9um4bmd-mT3Z6wNakBbsFONdPLJ7q1MabyoccIxPwCs2YTgXxmasQiO4eUIB8ZQUDujqHlicCLxhAnNjYVNm5SYmfPXfmJt5_HDqOiMHPbanD5JwZZ5SIq60IdculZKxpxAqHPzAYftCxgJAFPdiTkCcOQ4FqMR-DL6ZJDvJEoKlMqUqcXlcwaHRdlNQPuPPODhMSN9CkMndGUmqyrodJ-5a3NG58uh4oHlLCe1KqkjZWi3AbseTqEXC6y7c8-uREKuvERpbokMUvJD0pNKB1tySpyJVcpxna_nAqHYmMiR1Z65LjXu2n-DQgtdHFslQyFMDnJ7ucDlpOESZhnMiq-Utz-snde8XB0WU1g1f7mdUBYmbGp3y7UT4KSZNf_OpYEEhbz3DPaxwp8P4FfHhaRkzn5Qfy4oHW6jK9axMAgbldKLRohSdbjhb2gbowmKDtSoZkg8Kqfr2C2MvXTiGO7wNNM3-pjjNeXU4WJ1fVPYjPF7DeJlP7WJIr5H-q9ibn-IvTdxWjgAP4R7KGUfVceVgsG61x6-mMJMAczRdMSGpIBGf4cNN2oRHDZPfTZkLsamWaU2o65NR2hU5g-wpu_M_m03X3UXWbyB8tgLndF8XBFFnWiCJU3c-20Bq9td_-5Lxo-JRHHF4zXWcCOCGkK0vKHtTz-TXlZDPz-q_Qad3h5UiXlqsiy_mYG43zzBDEtWcnE-1NQptFBc8tGKiVcuLpzvdWzX4vEw7ZdhntfPjG9U3k0kiB4zVDPWj6fF7Cw0nkr01YujG0Ajx9Gh5EEeIgqm3PJFJfogC2NJu8Ib1-n5LaUaWm7Yim546D-pIDtOamJ0BYVyLojcX9q33snGeakSxzI4brux9ecKfiK6XKhJ-QngHspF8xB5DrKPIZelHYwavzuPtERGR3mS1kP6QNu4D5khNXNlYWAbNWNSR2JvxHwCwRUyurEIlZojOHs6H0dGoaLjjbCpZ2JLTH2bB-IztyL-d2d2nwmy-BEotCTsezAtnm2HmYDfCZggVZ4T2MXHhljOBhEehgAN8yFffd_nLWRpg66nFXq8lpC9IPKTRFOLwLMvD72TjTlsmqmydQB7TSjuxbnKxbzvi1qrQPk0-rYfYGcT4OsQOkw21lo8GJ7lEzyz-UJ5s1OfR3uuLGEv4Rt-kZsl_FMD3qaQUSmJq7AmZXbwhepN7aJ-8Ta2soTOlAj-73EkP5B1_0LFq5gZhubFU-a1dV0DMlXOVW3162j7UBV4lPjUi0GIQ7GzVtIbseM6=w2560-h1355'} className='foto-borde-redondo' alt={'logo'}/>
                    Y como siempre te digo, eres la mujer más hermosa del mundo, eres la modelo perfecta para mi cámara.
                </Animator>
            </ScrollPage> <ScrollPage page={17}>
            <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                Sé que han sido días difíciles, definitivamente los más difíciles que nos ha tocado vivir.
                Pero tengo la certeza de que juntos, con amor, paciencia y perseverancia, saldremos adelante.
                  Te amo con todo mi corazón, todo mi corazón, todo mi corazón es solo tuyo, y nada ni nadie podrá cambiar eso, ni siquiera el tiempo. ❤️
            </Animator>
            </ScrollPage>
                <ScrollPage page={18}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        <div className={'video'}>
                            <iframe width="380" height="215"
                                    src="https://www.youtube.com/embed/d5gf9dXbPi0?si=vqudVLiOt9TP_AFb"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={18}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                </ScrollPage>
                <ScrollPage page={18}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                </ScrollPage>
                <ScrollPage page={18}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                </ScrollPage>
                <ScrollPage page={18}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                </ScrollPage>
                <ScrollPage page={18}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                </ScrollPage>
                <ScrollPage page={18}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                </ScrollPage>
                <ScrollPage page={18}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                </ScrollPage>
                <ScrollPage page={18}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                </ScrollPage>
                <ScrollPage page={18}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                </ScrollPage>
                <ScrollPage page={18}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                </ScrollPage>

            </ScrollContainer>
        </>
    )
}

export default App
