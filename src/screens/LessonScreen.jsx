import React , {useState , useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetVideoDetailsQuery } from '../slices/videosApiSlice';
import ReactPlayer from 'react-player';
import { FaCirclePlay } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import userIcon from '../assets/images/user-2.png'
import { useSaveCommentMutation } from '../slices/courseApiSlice';
import { toast } from 'react-toastify';
import noCommentsIcon from '../assets/images/chat.png'
import Loader from '../components/Loader';
import { useSelector } from 'react-redux';
import Meta from '../components/Meta';

function LessonScreen() {
  const { id: videoId } = useParams();
  const [newComment, setNewComment] = useState('');
  const { authInfo } = useSelector((state) => state.auth);


  const [saveComment] = useSaveCommentMutation();

  const [selectedQuality, setSelectedQuality] = useState('mp4_Format_1080');
  const navigate = useNavigate()


  useEffect(() => {
    // Check if authInfo is available and user.subscribe is not equal to 10
    if (authInfo && authInfo.user && authInfo.user.subscribed !== 5) {
      // Navigate to the home page
      navigate('/');
    }
  }, [authInfo, navigate]);


  const {
    data: video,
    isLoading,
    error,
    refetch: refetchVideoDetails,
  } = useGetVideoDetailsQuery(videoId);
  

  if (!video || !video.convertedvideos || video.convertedvideos.length === 0) {
    return <div>No video data available</div>;
  }

  const s3BucketUrl = 'https://lowkalo-resources.s3.amazonaws.com'; // Replace with your S3 bucket URL

  // Assuming 'mp4_Format_1080' is the default quality

  const handleQualityChange = (newQuality) => {
    setSelectedQuality(newQuality);
  };

  const videoUrl = `${s3BucketUrl}/${video.convertedvideos[0][selectedQuality]}`;




  const handlePreviousLesson = () => {
    const previousVideoId = parseInt(videoId) - 1;
    navigate(`/lessons/${previousVideoId}`);
  };

  const handleNextLesson = () => {
    const nextVideoId = parseInt(videoId) + 1;
    navigate(`/lessons/${nextVideoId}`);
  };



const handleCommentSubmit = async () => {
  try {
      
    const res = await saveComment({
      videoId,
      body:newComment
    }).unwrap();
console.log(res)
    
toast.success('done');
await refetchVideoDetails();
setNewComment('')

  } catch (err) {
    toast.error(err);
    
  }
};





  return (
<>
{isLoading ? (
    // <Loader />
   <Loader />
    ) : error ? (
      <div>{error?.data?.message || error.error}</div>
    ) : (
      <>
     <div className="flex justify-between items-center px-4 mt-4">
     <Meta />
  <button
    onClick={handlePreviousLesson}
    className={`bg-softBlue text-white py-2 px-4 rounded hover:bg-opacity-80 focus:outline-none ${
      videoId == 1 ? 'cursor-not-allowed opacity-50' : ''
    }`}
    disabled={videoId == 1}
  >
    الدرس السابق
  </button>
  <button
    onClick={handleNextLesson}
    className={`bg-softBlue text-white py-2 px-4 rounded hover:bg-opacity-80 focus:outline-none ${
      videoId == 14 ? 'cursor-not-allowed opacity-50' : ''
    }`}
    disabled={videoId == 14}
  >
    الدرس التالي
  </button>
</div>
    <div className="flex flex-col lg:flex-row py-5" dir='rtl'>
        
    {/* Left part - Lessons Slider */}
    <div className="-full lg:w-1/4 bg-white p-4 overflow-y-auto shadow-lg mt-4">
      {/* <h2 className="text-xl font-bold mb-4">دورة إدارة المطاعم والكافيهات
</h2> */}

<h2 className="mb-6 text-4xl text-veryDarkBlue font-semibold mt-4">دورة إدارة المطاعم والكافيهات للمبتدئين</h2>

      <ul>
        <h3 className="text-lg mb-2 mt-5 font-semibold text-veryDarkBlue">الدرس الاول - المقدمة للكورس</h3>
        <Link  to='/lessons/1' >
                      
                            
          <li
            
            className={`cursor-pointer hover:underline flex mb-2 items-center  ${
              videoId === '1' ? 'text-softBlue' : 'veryDarkBlue'
            }`}
           
          >
          <FaCirclePlay className='ml-2' /> المقدمة - الجزء الاول
          </li>
          </Link>

          <Link to='/lessons/2'>
          <li
            
            className={`cursor-pointer hover:underline flex mb-2 items-center  ${
              videoId === '2' ? 'text-softBlue' : 'veryDarkBlue'
            }`}           
          >
         <FaCirclePlay className='ml-2' /> لماذا التحكم بتكاليف المطعم - الجزء الثاني
          </li>
</Link>
          </ul>

          <h3 className="text-lg mb-2 mt-5 font-semibold text-veryDarkBlue">الدرس الثاني بعد المقدمة - المخزون</h3>

          <ul>
            <Link to='/lessons/3'>
          <li
            
            className={`cursor-pointer hover:underline flex mb-2 items-center  ${
              videoId === '3' ? 'text-softBlue' : 'veryDarkBlue'
            }`}                
          >
          <FaCirclePlay className='ml-2' /> إدارة المخزون - الجزء الأول
 
          </li>
          </Link>

          <Link to='/lessons/4'>
          <li
            
            className={`cursor-pointer hover:underline flex mb-2 items-center  ${
              videoId === '4' ? 'text-softBlue' : 'veryDarkBlue'
            }`}                
          >
          <FaCirclePlay className='ml-2' /> إدارة المخزون - الجزء الثاني
  
          </li>
          </Link>
      </ul>


      <h3 className="text-lg mb-2 mt-5 font-semibold text-veryDarkBlue">الدرس الثالث - تسعير المواد الغذائية</h3>

      <ul>
            <Link to='/lessons/5'>
      <li
            
            className={`cursor-pointer hover:underline flex mb-2 items-center  ${
              videoId === '5' ? 'text-softBlue' : 'veryDarkBlue'
            }`}                
          >
          <FaCirclePlay className='ml-2' /> مقدمة تسعير المواد الغذائية - الجزء الاول
  
          </li>
</Link>

<Link to='/lessons/6'>
          <li
            
            className={`cursor-pointer hover:underline flex mb-2 items-center  ${
              videoId === '6' ? 'text-softBlue' : 'veryDarkBlue'
            }`}                
          >
          <FaCirclePlay className='ml-2' /> تكلفة المنتج - تسعير المنيو - الجزء الثاني
  
          </li>
</Link>

<Link to='/lessons/7'>
          <li
            
            className={`cursor-pointer hover:underline flex mb-2 items-center  ${
              videoId === '7' ? 'text-softBlue' : 'veryDarkBlue'
            }`}                
          >
          <FaCirclePlay className='ml-2' /> نسبة تكلفة المواد الغذائية - الجزء الثالث
  
          </li>
</Link>

<Link to='/lessons/8'>
          <li
            
            className={`cursor-pointer hover:underline flex mb-2 items-center  ${
              videoId === '8' ? 'text-softBlue' : 'veryDarkBlue'
            }`}                
          >
          <FaCirclePlay className='ml-2' /> تكاليف المواد الغذائية للمطعم كامل- الجزء الرابع
  
          </li>
</Link>

<Link to='/lessons/9'>
          <li
            
            className={`cursor-pointer hover:underline flex mb-2 items-center  ${
              videoId === '9' ? 'text-softBlue' : 'veryDarkBlue'
            }`}                
          >
          <FaCirclePlay className='ml-2' /> هامش المساهمة - الجزء الخامس
  
          </li>
</Link>

<Link to='/lessons/10'>
          <li
            
            className={`cursor-pointer hover:underline flex mb-2 items-center  ${
              videoId === '10' ? 'text-softBlue' : 'veryDarkBlue'
            }`}                
          >
          <FaCirclePlay className='ml-2' /> مثال هامش المساهمة - الجزء السادس
  
          </li>
        </Link>
      </ul>

      <h3 className="text-lg mb-2 mt-5 font-semibold text-veryDarkBlue">الدرس الرابع - هندسة قائمة الطعام</h3>

      <ul>
        <Link to='/lessons/11'>
      <li
            
            className={`cursor-pointer hover:underline flex mb-2 items-center  ${
              videoId === '11' ? 'text-softBlue' : 'veryDarkBlue'
            }`}                
          >
          <FaCirclePlay className='ml-2' /> Menu Engineering
  
          </li>
          </Link>
      </ul>

      <h3 className="text-lg mb-2 mt-5 font-semibold text-veryDarkBlue">الدرس الخامس - إدارة المشتريات</h3>

        <ul>
          <Link to='/lessons/12'>
        <li
            
            className={`cursor-pointer hover:underline flex mb-2 items-center  ${
              videoId === '12' ? 'text-softBlue' : 'veryDarkBlue'
            }`}                
          >
          <FaCirclePlay className='ml-2' /> إدارة المشتريات - الجزء الاول
  
          </li>
</Link>

<Link to='/lessons/13'>
          <li
            
            className={`cursor-pointer hover:underline flex mb-2 items-center  ${
              videoId === '13' ? 'text-softBlue' : 'veryDarkBlue'
            }`}                
          >
          <FaCirclePlay className='ml-2' /> إدارة المشتريات - الجزء الثاني
  
          </li>
</Link>
<Link to='/lessons/14'>
          <li
            
            className={`cursor-pointer hover:underline flex mb-2 items-center  ${
              videoId === '14' ? 'text-softBlue' : 'veryDarkBlue'
            }`}                
          >
          <FaCirclePlay className='ml-2' /> بار ليفل
  
          </li>
          </Link>
        </ul>




    </div>

    {/* Right part - Video Display */}
    <div className="w-full lg:w-3/4 p-4">
      
        {/* <video className="w-full" controls>
          <source  type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

<ReactPlayer
        url={videoUrl}
        controls
        width="100%"
        height="100%"
      />

<h2 className="mb-6 text-4xl text-veryDarkBlue font-semibold mt-4">{video.title}</h2>
<div className="mt-3">
        <label htmlFor="qualitySelect" className="mr-2 font-semibold">
          اختر الجودة:
        </label>
        <select
          id="qualitySelect"
          onChange={(e) => handleQualityChange(e.target.value)}
          value={selectedQuality}
        >
   
            <option  value={'mp4_Format_1080'}>
            1080p
            </option>
            <option  value={'mp4_Format_720'}>
            720p
            </option>

            <option  value={'mp4_Format_480'}>
            480p
            </option>

            <option  value={'mp4_Format_360'}>
            360p
            </option>
            <option  value={'mp4_Format_240'}>
            240p
            </option>
        </select>
      </div>
 

    </div>
    
  </div>
    {/* Advanced Sections for Comments */}
    <div className="mt-8 p-5" dir='rtl'>
              <h3 className="text-2xl text-veryDarkBlue font-semibold mb-4">
                التعليقات
              </h3>
              {/* Display existing comments */}
              {video.comments.length === 0 ? (
  <div className="flex items-center gap-2">
    {/* Icon for no comments */}
    <div className="mr-3">
      <img
        src={noCommentsIcon}
        alt="No comments icon"
        className="w-10 h-8 rounded-full"
      />
    </div>
    
    {/* Message for no comments */}
    <p className="text-veryDarkBlue">لا يوجد تعليقات بعد</p>
  </div>
) : (
  video.comments.map((comment) => (
    <div key={comment.id} className="mb-4 flex items-start gap-2">
      {/* User Icon */}
      <div className="mr-3">
        <img
          src={userIcon}
          alt={`user Avatar`}
          className="w-8 h-8 rounded-full"
        />
      </div>

      {/* Comment Details */}
      <div>
        {/* User Name */}
        <p className="text-veryDarkBlue font-semibold mb-1">{comment.user.name}</p>

        {/* Comment Text */}
        <p className="text-veryDarkBlue">{comment.body}</p>
      </div>
    </div>
  ))
)}



              {/* Write a comment */}
              <div className="mt-6">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full p-2 border rounded focus:outline-none"
                  rows="4"
                  placeholder="أضف تعليقك هنا..."
                />
                <button
                  onClick={handleCommentSubmit}
                  className="mt-2 bg-softBlue text-white py-2 px-4 rounded hover:bg-opacity-80 focus:outline-none"
                >
                  إرسال التعليق
                </button>
              </div>
            </div>
  </>
   )}
  </>
  )
}

export default LessonScreen