import styles from '@/styles/images.module.css'
import Logo from '@/assets/logo.png'

function Images() {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
          <img alt="main photo"  src='https://s3-alpha-sig.figma.com/img/ea6c/4bde/5e720c25edaaff9a1145a129c7811198?Expires=1698624000&Signature=kIosju~EOG4rA1WIcPaYuln1APwN72lCqPm7b0ALhdwz1RYmLYJw-ckiozSyRE7yMGXhBzRuUxt8eMIhY2Nd~~AVVdICgs03Ej6Pgjxl1~35yS5JoZA9UAFamgE7jQGI1mQ0SVpKebZF1AjsRFNlg3qNyLJ6sBhuCsqDx0tgm~Wfn-utCzE~mO52jedHPw7Qu3vEbF4SCOKpNMVCwa9V48QnJHTF95OSl4La3ezZVEnDkR9BjxHtOcWg2cxOrIQAcnPoddP3V~2RyPhChagjKK3c2~a96AhEVCuYgT9qXPPQQdYOTC0hhsdjhW9Gt7RqCOUzXmsBuSGQteN1sc70gw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
        </div>
        <div className={styles.secondry}>
            <img src="" alt="" className={styles}/>
            <img src="" alt="" className={styles}/>
        </div>
    </div>
  )
}

export default Images
