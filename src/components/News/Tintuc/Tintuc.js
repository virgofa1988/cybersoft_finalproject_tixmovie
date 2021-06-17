import React from "react";
import "./Tintuc.css";

export default function Tintuc() {
  return (
    <div>
      <div className="tinTuc_Contatiner_top md:grid md:grid-cols-2">
        <div className="tinTuc_news tinTuc_new1 p-3 relative">
          <a
            href="https://zingnews.vn/thang-duy-dong-phim-moi-cua-dao-dien-co-hau-gai-post1141317.html"
            target="_blank"
          >
            <img
              className="tinTuc_new1_img rounded-md"
              src="https://znews-photo.zadn.vn/w660/Uploaded/aobovhp/2020_10_13/79332148_1279114445594121_7816999534243872768_n.jpg"
              alt="znews-photo-thangduy"
            ></img>
            <img
              className="absolute top-8 right-8 w-1/4"
              src="https://static-znews.zadn.vn/images/logo-zing-home.svg"
              alt="zingnewsLogo"
            />
          </a>
          <div className="tinTuc_new1_info ">
            <a
              href="https://zingnews.vn/thang-duy-dong-phim-moi-cua-dao-dien-co-hau-gai-post1141317.html"
              target="_blank"
            >
              <h3 className="p_news_info">
                Thang Duy đóng phim mới của đạo diễn ‘Cô hầu gái’
              </h3>
            </a>
            <p>
              “Decision to Leave” - dự án điện ảnh mới của đạo diễn Park Chan
              Wook - sẽ khởi quay trong cuối tháng 10 với Thang Duy và Park Hae
              Il đóng chính.
            </p>
          </div>
        </div>
        <div className="tinTuc_news tinTuc_new2 p-3 relative">
          <a
            href="https://zingnews.vn/10-bo-ba-phim-that-bai-o-phan-cuoi-post1141853.html"
            target="_blank"
          >
            <img
              className="tinTuc_new1_img rounded-md"
              src="https://znews-photo.zadn.vn/w860/Uploaded/ngogtn/2020_10_14/spidey3_image05.jpg"
              alt="znews-photo-spiderman"
            ></img>
            <img
              className="absolute top-8 right-8 w-1/4"
              src="https://static-znews.zadn.vn/images/logo-zing-home.svg"
              alt="zingnewsLogo"
            />
          </a>
          <div className="tinTuc_new1_info ">
            <a
              href="https://zingnews.vn/10-bo-ba-phim-that-bai-o-phan-cuoi-post1141853.html"
              target="_blank"
            >
              {" "}
              <h3 className="p_news_info">
                10 bộ ba phim thất bại ở phần cuối
              </h3>
            </a>
            <p>
              “Lời nguyền phần phim thứ ba” là điều phổ biến tại Hollywood khi
              các trilogy thành công rực rỡ trong hai phần đầu rồi đột ngột sụt
              giảm về chất lượng ở tập cuối.
            </p>
          </div>
        </div>
      </div>
      <div className="tinTuc_Contatiner_bottom md:grid md:grid-cols-3">
        <div className="tinTuc_news tinTuc_new3 p-3 relative">
          <a
            href="https://zingnews.vn/bo-phim-kinh-di-dang-so-nhat-moi-thoi-dai-post1143992.html"
            target="_blank"
          >
            <img
              className="tinTuc_new1_img rounded-md"
              src="https://znews-photo.zadn.vn/w860/Uploaded/ngogtn/2020_10_20/sinister_still3.jpg"
              alt="znews-photo-phimkinhdi"
            ></img>
            <img
              className="absolute top-8 right-8 w-1/4"
              src="https://static-znews.zadn.vn/images/logo-zing-home.svg"
              alt="zingnewsLogo"
            />
          </a>
          <div className="tinTuc_new1_info ">
            <a
              href="https://zingnews.vn/bo-phim-kinh-di-dang-so-nhat-moi-thoi-dai-post1143992.html"
              target="_blank"
            >
              <h3 className="p_news_info">
                Bộ phim kinh dị đáng sợ nhất mọi thời đại
              </h3>
            </a>
            <p>
              Nghiên cứu khoa học chỉ ra bộ phim kinh dị siêu nhiên “Sinister”
              (2012) của đạo diễn Scott Derrickson là tác phẩm đáng sợ nhất mọi
              thời đại.
            </p>
          </div>
        </div>
        <div className="tinTuc_news tinTuc_new4 p-3 relative">
          <a
            href="https://zingnews.vn/vi-sao-dien-anh-can-nhung-bo-phim-lam-lai-post1144480.html#wap"
            target="_blank"
          >
            <img
              className="tinTuc_new1_img rounded-md"
              src="https://znews-photo.zadn.vn/w1200/Uploaded/ngogtn/2020_10_20/mvzRGs31HqrI5qAaVRzAjnYfKUpCJajjD1InyfmH.jpeg"
              alt="znews-photo-thuTrang"
            ></img>
            <img
              className="absolute top-8 right-8 w-1/4"
              src="https://static-znews.zadn.vn/images/logo-zing-home.svg"
              alt="zingnewsLogo"
            />
          </a>
          <div className="tinTuc_new1_info ">
            <a
              href="https://zingnews.vn/vi-sao-dien-anh-can-nhung-bo-phim-lam-lai-post1144480.html#wap"
              target="_blank"
            >
              <h3 className="p_news_info">
                Vì sao điện ảnh cần những bộ phim làm lại?
              </h3>
            </a>
            <p>
              Bên cạnh chuyển thể, làm lại các tác phẩm cũ là lựa chọn ưa thích
              của Hollywood nói riêng và điện ảnh, truyền hình nói chung trong
              sứ mệnh sản xuất nội dung phục vụ khán giả.
            </p>
          </div>
        </div>
        <div className="tinTuc_news tinTuc_new5 p-3 relative flex flex-col justify-between">
          <div className="news5 news5_1 mt-2 flex">
            <a
              href="https://zingnews.vn/tai-tu-jeff-bridges-bi-ung-thu-hach-post1143860.html"
              target="_blank"
              style={{ width: "50px", height: "50px" }}
            >
              <img
                className="w-full h-full rounded-md"
                style={{ maxWidth: "none" }}
                src="https://znews-photo.zadn.vn/w860/Uploaded/bzwvopcg/2020_10_20/ungt.jpg"
                alt="jeffbridge"
              />
            </a>
            <a
              className="ml-2"
              href="https://zingnews.vn/tai-tu-jeff-bridges-bi-ung-thu-hach-post1143860.html"
              target="_blank"
            >
              <h4 className="p_news_info_list">
                Tài tử Jeff Bridges bị ung thư hạch
              </h4>
            </a>
          </div>
          <div className="news5 news5_2 mt-2 flex">
            <a
              href="https://zingnews.vn/10-meo-dien-xuat-cua-cac-ngoi-sao-dien-anh-post1140588.html"
              target="_blank"
              style={{ width: "50px", height: "50px" }}
            >
              <img
                className="w-full h-full rounded-md"
                style={{ maxWidth: "none" }}
                src="https://znews-photo.zadn.vn/w860/Uploaded/aobovhp/2020_10_11/m4.jpg"
                alt="ironman"
              />
            </a>
            <a
              className="ml-2"
              href="https://zingnews.vn/10-meo-dien-xuat-cua-cac-ngoi-sao-dien-anh-post1140588.html"
              target="_blank"
            >
              <h4 className="p_news_info_list">
                10 mẹo diễn xuất của các ngôi sao điện ảnh
              </h4>
            </a>
          </div>
          <div className="news5 news5_3 mt-2 flex">
            <a
              href="https://zingnews.vn/lily-james-bi-che-dien-xuat-vo-hon-trong-phim-moi-post1144537.html"
              target="_blank"
              style={{ width: "50px", height: "50px" }}
            >
              <img
                className="w-full h-full rounded-md"
                style={{ maxWidth: "none" }}
                src="https://znews-photo.zadn.vn/w860/Uploaded/aobovhp/2020_10_11/m6.jpg"
                alt="ironman"
              />
            </a>
            <a
              className="ml-2"
              href="https://zingnews.vn/lily-james-bi-che-dien-xuat-vo-hon-trong-phim-moi-post1144537.html"
              target="_blank"
            >
              <h4 className="p_news_info_list">
                Lily James bị chê diễn xuất vô hồn trong phim mới
              </h4>
            </a>
          </div>
          <div className="news5 news5_4 mt-2 flex">
            <a
              href="https://zingnews.vn/dylan-o-brien-bi-am-anh-vi-tai-nan-truong-quay-post1143874.html"
              target="_blank"
              style={{ width: "50px", height: "50px" }}
            >
              <img
                className="w-full h-full rounded-md"
                style={{ maxWidth: "none" }}
                src="https://znews-photo.zadn.vn/w860/Uploaded/aobovhp/2020_10_20/dylan.jpg"
                alt="ironman"
              />
            </a>
            <a
              className="ml-2"
              href="https://zingnews.vn/dylan-o-brien-bi-am-anh-vi-tai-nan-truong-quay-post1143874.html"
              target="_blank"
            >
              <h4 className="p_news_info_list">
                Dylan O’Brien bị ám ảnh vì tai nạn trường quay
              </h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
