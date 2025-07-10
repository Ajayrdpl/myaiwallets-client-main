import { useEffect, useState } from "react";
import { ButtonLinear } from "../../components/ui/Buttons";
import PageLoader from "../../components/ui/PageLoader";
import { createOrUpdateBanner } from "../../api/admin-api";
import Swal from "sweetalert2";
import { getAllBanners } from "../../api/user-api";
import { backendConfig } from "../../constants/content/MainContent";

const CreatePromotionalBanner = () => {
  const [loading, setLoading] = useState(false);
  const [bannerPayload, setBannerPayload] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base = e.target.result;
        const base64 = base.split("base64,")[1];
        setBannerPayload({ ...bannerPayload, banner: base64, bannerImg: base });
      };
      reader.readAsDataURL(file);
    }
  };
  const uploadBannerHandler = async () => {
    if (!bannerPayload.banner) {
      return Swal.fire({
        title: "Error",
        icon: "error",
        text: "Please upload a banner image.",
        confirmButtonText: "OK",
        timer: 3000,
      });
    }
    try {
      setLoading(true);
      await createOrUpdateBanner(bannerPayload);
      Swal.fire({
        title: "Success",
        icon: "success",
        text: "Banner Upload successfully.",
        confirmButtonText: "OK",
        timer: 3000,
      });
    } catch (err) {
      console.error("Error creating banner:", err);
      Swal.fire({
        title: "Error",
        icon: "error",
        text: err?.response?.data?.message || "Error uploading banner.",
        confirmButtonText: "OK",
        timer: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchBanners = async () => {
    try {
      setLoading(true);
      const res = await getAllBanners();
      setBannerPayload({ bannerImg: backendConfig.origin+ res?.data?.banner });
    } catch (error) {
      console.error("Failed to fetch banners", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);
  return (
    <>
      {loading && <PageLoader />}
      <div className="CreatePromotionalBanner">
        <div className="inner">
          <div className="upload-file">
            <div className="container">
              <div className="folder">
                <div className="front-side">
                  <div className="tip"></div>
                  <div className="cover"></div>
                </div>
                <div className="back-side cover"></div>
              </div>
              <label className="custom-file-upload">
                <input
                  accept="image/*"
                  className="title"
                  onChange={handleImageChange}
                  type="file"
                />
                Choose a Banner
              </label>
            </div>
          </div>
          <div className="btns">
            <ButtonLinear onClick={uploadBannerHandler} name="Upload" />
          </div>
          {bannerPayload?.bannerImg && (
            <div className="show-file cardBox">
              <img src={bannerPayload?.bannerImg} alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CreatePromotionalBanner;
