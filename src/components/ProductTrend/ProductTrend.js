import img from '../../assets/b5dd7b2648a1c9588185d2671557fbfd.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBrain} from '@fortawesome/free-solid-svg-icons';
import './ProductTrend.css'

function Productview() {
    return (
        <div>
         
             <div className='flex-productView'>
            <div>
                <img className='img-product left-half' src={img} />
            </div>
            <div className='right-half'>
                <h1><span>Thao</span><span style={{color: "red"}}> Túng</span>
                <span> Tâm</span><span style={{color: "red"}}> Lý</span>
                <span style={{color: "red"}}> <FontAwesomeIcon icon={faBrain}/> </span></h1>
                <p className='author-Product' style={{fontSize: "22px", fontWeight: "700"}}>Shannon Thomas</p>
                <br></br>
                <p className='font_text'>
                Cuốn sách “Thao Túng Tâm Lý” viết bởi tác giả Shannon Thomas sẽ mang đến cho độc giả<br></br>
                cái nhìn về những vấn đề liên quan đến thao túng và lạm dụng tiềm ẩn tâm lý. Tác giả<br></br>
                đã tạo nên nội dung sách theo hai góc nhìn là của một nhà trị liệu tâm lý và của một nạn nhân bị túng tâm lý.
                </p>
                <br></br>
                <p className='font_text'>          
                Bà Shannon Thomas được nhiều người biết đến với vai trò làm nhà giám sát công tác xã hội y tế, là chuyên gia tư vấn tâm lý được cấp giấy phép hành nghề, có văn phòng tư vấn Southlake Christan (SCC) tại Southlake, bang Taxas. Với danh tiếng uy tín, SCC đã trao tặng cho bà giải thưởng “Phòng thực hành tư vấn tâm lý tốt nhất” năm 2016. Đồng thời bà cũng là tác giả của quyển sách nhân văn “Thao Túng Tâm Lý”. Phương pháp tiếp cận tư vấn tâm lý của Shannon Thomas đặt nền tảng từ góc nhìn của một nhà trị liệu tâm lý đã được cấp phép. 
                </p>
                <br></br>

                <p className='font_text'>                  
                Nội dung của quyển sách gồm những kiến thức cơ bản về đặc điểm tâm lý và các dạng thao túng tâm lý,<br></br>
                cùng hành trình tỉnh thức và chữa lành chấn thương tâm lý gồm có 6 giai đoạn chính là:<br></br>Tuyệt vọng, Nhận diện, Thức tỉnh, Những ranh giới, Phục hồi và Duy trì.      
                </p>

                <h4 className='price-ProductView'>Price 50.000 VNĐ</h4>

                <h3 onClick={() => {
                    alert('Đã thêm vào giỏ hàng');
                }} className='button-Shopping'>CONTINUE SHOPPING</h3>
            </div>
        </div>
        </div>
       
    );
}

export default Productview
