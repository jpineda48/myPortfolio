import './About.css'
import Code from '../../img/pixels.png'


 const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                <img src={Code} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>
                Counting objects: 100% (39/39), done.
                Delta compression using up to 8 threads
                Compressing objects: 100% (37/37), done.
                Writing objects: 100% (39/39), 193.08 KiB | 9.65 MiB/s, done.
                Total 39 (delta 2), reused 0 (delta 0), pack-reused 0
                remote: Resolving deltas: 100% (2/2), done.
                </p>
                <p className='a-desc'>
                Enumerating objects: 39, done.
                Counting objects: 100% (39/39), done.
                Delta compression using up to 8 threads
                Compressing objects: 100% (37/37), done.
                Writing objects: 100% (39/39), 19

                </p>
            </div>
        </div>
    )
 }

 export default About;