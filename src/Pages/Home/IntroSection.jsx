import React from 'react'
import styles from './Home.module.scss'
import strings from '../../strings.json'

export default function IntroSection() {
  return (
    <div className={styles.introSection__wrap}>
    <div className={styles.title}>Hi, i’m <span className='text-primary-blue-500'>Atul Bhatt</span></div>
    <div className={styles.title}>{strings.Intro_Section.title}</div>
    <div className={styles.sub_title}>{strings.Intro_Section.sub_title_dark}<span className='text-gray-200'>{strings.Intro_Section.sub_title_light}</span></div>
    <button className={styles.primary_button}>{strings.Intro_Section.button_text}</button>
    </div>
  )
}
