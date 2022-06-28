import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my- shadow " style={{width: "18rem"}}>
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img src={!imageUrl ? "https://www.clipartmax.com/png/middle/425-4252718_humanity-news-globe-logo-png.png" : imageUrl} className="card-img-top" style={{height : "200px"}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...  </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Anonymous" : author}</small></p>
                        <p classNamee="card-text"><small className="text-muted">On {date.slice(0, 10)}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary shadow">Read More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem
