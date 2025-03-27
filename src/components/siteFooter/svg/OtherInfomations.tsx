export default function OtherInfomations({
  className = "",
}: OtherInfomationsProps) {
  return (
    <div className="site-footer__sidebar-3">
      <div className="site-footer__contact">
        <div className="site-footer__contact2">Contact </div>
        <svg
          className="site-footer__caret-right"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.0625 9.76656V3.23295C4.0625 2.78053 4.60949 2.55397 4.92939 2.87387L8.1962 6.14068C8.3945 6.33898 8.3945 6.66053 8.1962 6.85883L4.92939 10.1256C4.60949 10.4456 4.0625 10.219 4.0625 9.76656Z"
            fill="#D7DBFF"
          />
        </svg>
      </div>
      <div className="site-footer__careers">
        <div className="site-footer__blog">Blog </div>
        <svg
          className="site-footer__caret-right2"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.0625 9.76656V3.23295C4.0625 2.78053 4.60949 2.55397 4.92939 2.87387L8.1962 6.14068C8.3945 6.33898 8.3945 6.66053 8.1962 6.85883L4.92939 10.1256C4.60949 10.4456 4.0625 10.219 4.0625 9.76656Z"
            fill="#D7DBFF"
          />
        </svg>
      </div>
      <div className="site-footer__privacy">
        <div className="site-footer__privacy-policy">Privacy policy </div>
        <svg
          className="site-footer__caret-right3"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.0625 9.76705V3.23343C4.0625 2.78102 4.60949 2.55446 4.92939 2.87436L8.1962 6.14117C8.3945 6.33947 8.3945 6.66102 8.1962 6.85932L4.92939 10.1261C4.60949 10.446 4.0625 10.2195 4.0625 9.76705Z"
            fill="#D7DBFF"
          />
        </svg>
      </div>
      <div className="site-footer__terms">
        <div className="site-footer__terms-conditions">
          Terms &amp; conditions{" "}
        </div>
        <svg
          className="site-footer__caret-right4"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.0625 9.76705V3.23343C4.0625 2.78102 4.60949 2.55446 4.92939 2.87436L8.1962 6.14117C8.3945 6.33947 8.3945 6.66102 8.1962 6.85932L4.92939 10.1261C4.60949 10.446 4.0625 10.2195 4.0625 9.76705Z"
            fill="#D7DBFF"
          />
        </svg>
      </div>
      <div className="site-footer__informations">Informations </div>
    </div>
  );
}

interface OtherInfomationsProps {
  className: string;
}
