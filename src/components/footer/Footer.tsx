import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto">
        <div className="md:flex mb-3">
          <div className="md:w-1/3 text-center">
            <h4 className="font-bold text-lg underline">Follow us</h4>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
            </ul>
          </div>

          <div className="md:w-1/3 text-center">
            <h4 className="font-bold text-lg underline">Useful links</h4>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
          </div>

          <div className="md:w-1/3 text-center">
            <h4 className="font-bold text-lg underline">Careers</h4>
            <ul>
              <li>
                <a href="#">Vacancies</a>
              </li>
              <li>
                <a href="#">Life at Venturio</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm">&copy; copyright 2024</div>
      </div>
    </footer>
  );
};

export default Footer;
