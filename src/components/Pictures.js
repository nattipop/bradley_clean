/* eslint-disable eqeqeq */
import { useState } from "react"

const beforePhotos = [
  {
    title: "before one",
    id: 1,
    src: "https://previews.dropbox.com/p/thumb/AB63Km25dzqLYNi8XcviBFbP60o6SRe_aQmtn9JhEk_8owyZoaY-b9A5XW0CC0ag9ry6g1RbYBNI3VRoyVcBmKMLvRh-ORAGculnryNp5rKR98WfgOmikfS8t1DY0FDZNqQjDMNT6H0qeYQxYX0FiU-YjvRHADpvGyThvg6GRoTIfAiZlmK61HvOzON4F69YAq2jEGl18X8Vw4P5gq_2apoBHPDEe-MuaQZ5Hj8KbDV1Sm6aMJBldMDtM6xSOjgClRx1mzkiv9Kx8zXz3MAj0JN8U35s-psxGFSWKOjs9rKfcKVINx4hKvGSwIRrRL2dwYoUKevSJXpi6MomNzkXeP7dKQHRfyXp2hQpTj8TvGHPtDR3cA9rXDXMzNEGPWQ0icw/p.jpeg"
  },
  {
    title: "before two",
    id: 3,
    src: "https://previews.dropbox.com/p/thumb/AB7lB9e_1_7WiJNem5Zv5pCQ4SOZvsiWXw8hAMZ8hoLKhPeR6EHLBnLKIr5lTIUhBJ9hTNklH4Dke_bMVCak9t7MfuuQop5w5dXBnSnAFV-Ph_iT_KI9eFOwu6j9xSSr366nGa1Z9ESHRmSeSbkTj4oLQRVXE6AQRuvU8g-0vIaVPltuKBJ9qyLVsiXiZgsE16YimZZOGe9riGPu8b4BRZzAaLeooTsM_V7fQ0UJIIAVNsqsCf-RZYsCt61qPwm5dnh6-ernm8xjrz2acp8yIU17nNzjjeeSLo8uRhqpKmTArhFzCN9qWFzFUY17UgDOmsl7JYSqSmhS1bjEVHwts6ozPTGSiR8T86zfr0m4CuXkw_eHkSVcz-BIf3fMwfiCKxiVJiwnx-PiblHi1dAqCFC2/p.jpeg"
  },
  {
    title: "before three",
    id: 5,
    src: "https://previews.dropbox.com/p/thumb/AB4EPDBzKN5wV4fGWhZEnTZtZajfNxERj7TD_nVSz0P9NYEN2YTSIpFuh0662fHf7eJMezVul6ELC9FME1Kxc-k73v5DUgtYSfilN_QiN4kN00hEgZnAr7EIDD49q_GW7WJJXNvHbUocJtjvhMhkAzGX6BHd2-rZ6qBFGVPA2Dc_w8bOw-JnsFvzHP7uGBL9OHlZWiVZS7f4onm9MsdWv7iBkVAnuYq81CRtq5ccREZvWKdt16BwmETb4miJhRWOnieDAfNjPZEikzN8IxFRBndyEIYsCjhGz1tGIxRiqpH_Fl_T5ict6yxIni58qktD5yce6ohMyZ4pYWTOrpbm0S5E1DV3Cry5u_LQW0rSK_UIXKRpLdJJXpAqf9DQ86E5g468E8eaVq2xBBvd5K7R2G2d/p.jpeg"
  },
  {
    title: "before four",
    id: 7,
    src: "https://previews.dropbox.com/p/thumb/AB7ruGISVpmXmst9-o6aD2Gp78Aw-hRVdfgXCafJUDr0xOuMuQXoE8ybOKAhwVYR0wWJT2O_MaRATCkUq1CZPlKk7xg5SkG2s6CwSx8Pnl8pMXULoBj_RdxigYCb4baWnsdGD9eG6pDHzaTU1c5yYCGly8J-b2say67Wd41jhr0Nb9pULZLyA1OqafTOn6vJpnjMt83h_mhi1A1pzVjM5NMUABxpysSknTbiohbYOBsHqiqMxWNUHEkmJAoQSz6OYWcWywHb7S5xlgrO1og0QRlT4yEbyhYBoZ6ahlIzgKzsUWmHPMvRDL6oTX2falU_S2XOEvwZ_4czco7GRm_Rlj_9hGtYIEpYqyQDYvVUrz270RYDBtDP5rjnrOYYJUEeAwBMWjxFEZjALC6aFlKn30X9/p.jpeg"
  },
  {
    title: "before five",
    id: 9,
    src: "https://previews.dropbox.com/p/thumb/AB5nEf4eI7UDt2YkgcMi6zVhgSmmB0Tq2xLN02jBcUjB3Q7uq61mULWk4Z-iuocowvRlJ9YG159SaRePibeMIx6zROktN1fKKcKBam1gah5Acb_DIuCiPyqJAj7fzcG9nBv9z3dk8VJDdXrV8BvEGa_8e8Sn-jDVGXC3iXAQOvjbkgHoasXJzXaQqGCt4dCMKi_yQXgAxiG3S2Tf77nDB3_roQKAzIsQ_42nuS5C3Zt1iqKi4z-dPpWQAFLlNXjIwRMmZrTdNx4y-tlrDOsJJb5fvKMegZSTrwAGZlXFPxKTEiokvrUr0Dx-_zo07oCdKMC9lvcO7Wt0q-EdubV2bZau-CuxrxQdBNC281UObqr05xW7xoodqH1PpN296TIqPwb0QCHsMzPHevhJduT3nlQL/p.jpeg"
  }
]

const afterPhotos = [
  {
    title: "after one",
    id: 2,
    src: "https://previews.dropbox.com/p/thumb/AB4MEbdxQpuH1RquKRFYNCuoz8hKdV9VFRIxySEdyVTWVQGts8yz79Dpr3s7R3vV1EHkqJLdM13TY_OtMDWAlq9vkLDaE9_fiUFlm4Jws41LvuiW3DcdgXMtaj0mOv8AKpmAly0P5WuYSLJFvnGbldf8CWGpGT2MRi06xeouXvHAtL-4P-r0XNdqFjKq7igW4GOMuZlV9_husE49-Z2RcLUVg9LYHNHwERjtYjAqgbQgxRsDQrSzer49axubAmki4n4WsA1tkDcsKfDcjIsO8pO4RVsAb327FL4Z7pkbdurqUNDJFM3Lfs9zF1NQsyZHvaStyAKNtbCY9pAIDDmYmkTwnZ96IssJYH4yytLCDMZImic028qKUm6479YX41_OC-xkU-gA4wYUuvKjj7OHo_RB/p.jpeg"
  },
  {
    title: "after two",
    id: 4,
    src: "https://previews.dropbox.com/p/thumb/AB6X7yVulc1AtMcdxAmzon_fNX7AsP3lOOamAPa7WEpFCpq6-eoh_y9oX0VM943L1edvPEoDcvKEm0J9y0zzr6UJ3BB_jSsZbMo5USwimBpn0VhINqt_ka5kflsoC-ksiea2UDnFGCbUFfDnLEWVKDa4h0Cm68l6AfedNZe_Wz3bJZ7CtxTYcyo9s8NkWiyl2hbO-uNnLtO3mjzHtbxXz7KUT2HJZTXsxkb0FG_JGVzXEx9WqHlV9BdJr_nS5KmUJxOF4CmTHjAyeyujr0mhQSAkRo6bOGscXcDMvhuYnUbFLh61IpnTJmONBrbvVW0nSf7pDTOIuke-HvTl7cURkUE7xIf_wMWF4YKRN4AiSaHwWB1X3cUSMce0lP2L5SOjxv4h8BIEn9ZXU29wePfZWdos/p.jpeg"
  },
  {
    title: "after three",
    id: 6,
    src: "https://previews.dropbox.com/p/thumb/AB7ZlhcezebSwIxuYsBhW3DXcvo_28ADXfkr454GUcO2cG4kZHBdLRtSxT07c9SUa4cFTPU56XoKOnuL53K8vuD-EYbsew6-RDKlEcqQCqa9pVQTiWguAd2x46Os_xZrnCTvPqXN0XPhQsdi9uaSbbBHlkkwWvBe7Zj3XTiN7UFkb5pi4E57W0hU99osM_SyYV9r7dHCI4YVGIEJZfIsdEI5vImscF0gvsRc_VCZkeUplFR8GmmTF8Z_A3XzPRC3kcvEsfH76xdwbsl-SV0og3r2U1xVPponqzCv0kPshRh3TZ4QfoISDMW7LU5U25p9g6yup9t8vGu_HknrTX6gyLv6qdf8iPazoIYW0R0FRPy0IVT_fC_MYUG48VFu5cXOt7YSglgOwfNlxJb6RIcWyUxP/p.jpeg"
  },
  {
    title: "after four",
    id: 8,
    src: "https://previews.dropbox.com/p/thumb/AB5NFpN5uwIkKcO-7QIdiW5DCk4kWCWLSh7lI_yrlYHgfATW-c_kKTBiT8WNXwWH-Np69iv_irX2RzwW5kYISopWNwLxQO8bwWP7T5MgyqhQfvdT70T00J8oHLmGbzKpWqSMShEXlmW47KsBWdQlhHtWukQFoKvOuL1t3JLDu2OUij81r7EbTKj7s-sY50ETCp1Zuv2iCUw-yLGl0F6RQrje-poGyGpHD6rOPxad4oGwHZK2ClyFH7oihEJWu2Rxn-PG8_S5up-FV7JAH-54BUNIK5y2DPXc09DnuaqSsSNq716SyFar5Oe1JFh7aQzbb5VSPfwl6hSJRwumdhl2fqwstdECPPUfoDM0a0agOQUeMNIY4txd2TtZH_fkUcuLOohaxsUGOgoqcKGpHKTFPcmQ/p.jpeg"
  },
  {
    title: "after five",
    id: 10,
    src: "https://previews.dropbox.com/p/thumb/AB5Juu0gWHOhaREpX4-WYjxKwJYadGOt8eEmueu_GocfORA4-5AFtVQOI5-4uqFr3vIPtyJrs5_uDQhbIuW4MPD-x5C7yr-a8P4rs8ZbiG8YtninjktsQXOkWl4Troj3qc3LIMZXSBwcD8ebYg_u6Gq1borxMU9VSarb5I5Kp_IQ7EiYdfChKkjyXVjzXwf_98UbS6kjZ8HwzEM7zSErCIXqlE_W07oPIYeAN_lJ_25BFaIaJ8H3ACsvhnw8m9-0kcOXA1S7TrfGStQ4mpQnJ-_AeGil2YtU5oV5_Dx0fKnMTTu-IGkWUA2fr4Qk8QOzViDYiGStnagq4L-sbKaWJyIMocb7r6gzFE-Kdbo6ghUa690SNampGY1QfobMSOSue57gr98PUTk2To2jXoaGlEzH/p.jpeg"
  }
]

const Pictures = () => {
  let [photos, setPhotos] = useState(beforePhotos);

  const toggleClean = () => {
    console.log(photos[0].id)
    if(photos[0].id % 2 !== 0) {
      console.log("odd")
      setPhotos(afterPhotos)
    }

    if(photos[0].id % 2 == 0) {
      console.log("even")
      setPhotos(beforePhotos)
    }
    return 
  }

  return (
    <div>
      <div className="row">
        {photos.map((photo) => {
          return (
            <div className="col" key={photo.id}>
              <img onClick={toggleClean} width="400px" src={photo.src} alt={photo.title} />
            </div>
          )
        })}
      </div>
      <button className="theme-button" onClick={toggleClean}>Click to clean!</button>
    </div>
  )
}

export default Pictures;