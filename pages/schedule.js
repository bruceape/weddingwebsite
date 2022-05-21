import Navigation from '../components/navigation'
import styles from '../styles/Schedule.module.css'
import React from 'react';
import { Context } from '../components/AppStateProvider'

function Item( {time, title, description, detailsDescription, details }) {
  detailsDescription = detailsDescription || ''
  let descItems = detailsDescription
    .split('\n')
    .map((i, idx) =>
      <p
        key={idx} 
        className={styles.detailsDescription}>
        {i}
      </p>
    )

  details = details || []
  let detailItems = details.map((d, idx) =>
    <li className={styles.detailsItem} key={idx}>
      <span className={styles.detailsHighlight}>
        {d.title}:
      </span>
      {d.content}
    </li>
  )

  return (
    <div className={styles.item}>
      <div className={styles.itemMeta}>
        <div className={styles.eventTitle}>{time} / {title}</div>
        <div className={styles.eventDescription}>
          {description}
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <h3 className={styles.detailsTitle}>
          Details
        </h3>   
        <div className={styles.detailsDescriptionContainer}>
          {descItems}
        </div>
        { detailItems.length
          ? <ul className={styles.detailsList}>
              {detailItems}
            </ul>
          : <></>
        }
      </div>
    </div>
  )
}

function Divider() {
  return (
    <div className={styles.divider}></div>
  )
}


function Section({ data }) {
  const count = data.items.length
  const items = data.items.map((i, idx) =>
    <React.Fragment key={i.title}>
      <Item
        title={i.title}
        time={i.time}
        description={i.description}
        detailsDescription={i.detailsDescription}
        details={i.details}
      />
      {idx < count - 1 ? <Divider /> : <></>}
    </React.Fragment>
  )

  return (
    <div className={styles.section}>
      <h2 className={`${styles.sectionTitle} garamond-italic`}>
        {data.title}
      </h2>
      <div className={styles.itemContainer}> 
        {items}
      </div>
    </div>
  )
}

const schedule = [{
    title: 'Friday, May 27',
    items: [{
      title: 'Most guests arrive',
      time: 'All day',
      description: 'We will be running around a lot this day, but we will see you at the welcome party.',
      detailsDescription: 'We\'re so excited to see everyone!',
      details: [{
        title: 'Transporation', content: 'Best way to get into the city is by Uber or by Bart. Uber ranges from $30-60. BART will be around $10, but you will have to commute from bart station to wherever you are staying.'
      }
    ]}, {
      title: 'Rehearsal',
      time: '4:30 PM',
      description: 'Bridesmaids and groomsmen are not obligated to attend as we know many of them are arriving that evening or working. ',
      detailsDescription: 'Getting to the ceremony site is tricky, so please let us know if you would like to carpool with one of us. \n We will film the rehearsal so that anyone who is unable to attend will have a sense of layout and timing. No dress code. ',
      details: []
    }, {
      title: 'Welcome Party',
      time: '7:30 PM - 9:00 PM',
      description: 'For our out-of-town guests. We will be having a small get together with pizza, wine/beer, and finger food. ',
      detailsDescription: 'Location is TBD, but most likely will be at our apartment. Ubering to our place will probably be the best option. Let us know if you have trouble getting to us. No dress code.',
      details: []
    }]
  }, 


  {
    title: 'Saturday, May 28',
    items: [{
      title: 'Bridal party arrives',
      time: '2:45-3:00 PM',
      description: 'Family and bridal party arrives at wedding site.',
      detailsDescription: 'We will be asking all guests to take a covid test when they arrive and before taking off their masks. Thank you for making this day so much more safer for everyone. ',
      details: [
        {title: 'Transporation', content: 'Getting to the ceremony site is tricky, so please let us know if you need help getting there. We will be renting some cars for out of town family, and we can try to set up carpooling/rent more cars.  Keep in mind it is Memorial Day Weekend and Golden Gate Bridge anniversary, so give yourself enough time to arrive, and take a covid test. '},
        {title: 'Parking', content: 'There will be parking at Battery Alexander and Bonita Lighthouse '}
    ]}, {
      title: 'Guests arrive',
      time: '3:00-3:15 PM',
      description: 'The rest of the party arrives.',
      detailsDescription: 'We will be asking all guests to take a covid test when they arrive and before taking off their masks. Thank you for making this day so much more safer for everyone. ',
      details: [
        {title: 'Transporation', content: 'Getting to the ceremony site is tricky, so please let us know if you need help getting there. We will be renting some cars for out of town family, and we can try to set up carpooling/rent more cars.  Keep in mind it is Memorial Day Weekend and Golden Gate Bridge anniversary, so give yourself enough time to arrive, and take a covid test. '},
        {title: 'Parking', content: 'There will be parking at Battery Alexander and Bonita Lighthouse '}
    ]}, {
      title: 'Wedding begins',
      time: '3:15 - 3:35 PM',
      description: 'Wedding procession starts. ',
      detailsDescription: 'This will be live streamed via Youtube, for all those unable to attend. ',
      details: []
    }, {
      title: 'Group photo',
      time: '3:45 PM',
      description: 'Everyone congregates for group photo. ',
      detailsDescription: 'If you feel unsafe to take group photo, no worries, we totally understand. ',
      details: []
    }, {
      title: 'Move to reception',
      time: '4:15 - 6:30 PM',
      description: 'Bride and groom will take pictures. Guests can slowly make their way to the reception or hotel to freshen up. ',
      detailsDescription: 'There will be some time in between the ceremony and the reception. We wanted to give y’all enough time to cross the bridge and for us to get a few photos before heading over. ',
      details: []
    }, {
      title: 'Foreign Cinema opens for guests',
      time: '6:30 PM',
      description: '',
      detailsDescription: 'There will be an open bar & free parking nearby. ',
      details: [{title: 'Note', content: 'The neighborhood might seem a little grungy and rough around the edges, but rest assured it’s very safe.'}]
    }, {
      title: 'Bride & groom arrive',
      time: '6:45 - 7:00 PM',
      description: '',
      detailsDescription: 'Mingling and photo taking with guests.',
      details: []
    }, {
      title: 'Dinner starts',
      time: '7:00 PM',
      description: 'It’s amazing food—biggest reason why we got this place. ',
      detailsDescription: 'Enjoy the food and drinks! The menu is seasonal, so we\'ll provide more details as the menu gets developed. ',
      details: []
    }, {
      title: 'Cake and a few words',
      time: '8:00 PM',
      description: 'Bride and groom will say a few words before cutting the cake. ',
      detailsDescription: 'If people start dancing afterwards, we won’t be mad about it.',
      details: []
    }, {
      title: 'Bride & groom depart',
      time: '9:30 PM',
      description: 'Bride and groom will head out',
      detailsDescription: 'Everyone will start wrapping up and preparing to retire for the night around this time',
      details: []
    }]
  }
]

export default function Schedule() {
  const { state } = React.useContext(Context)
  const modalOpen =  !state.menuOpen ? '' : 'locked'

    return (
      <div className={`${styles.container} ${modalOpen}`}>
        <Navigation currentPage="Schedule & Details" />
        {/*<div className={styles.note}> Note: This schedule is a WIP and subject to change. </div>*/}
        <div className={styles.sectionList}>
          {schedule.map((a) => <Section key={a.title} data={a} />)}
        </div>
      </div>
    )
}

