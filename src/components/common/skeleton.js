
export const SkeletonCard =(length=8)=> {
    return (
        Array.from({ length }).map(() => (
            <div className="col-md-3 col-sm-6 col-12 mb-4">
                <div className={`movie-list-card`}>
                    <div 
                        className="card-img-top shimmer" 
                    />
                    <div className="card-body-box">
                        <span className=" shimmer skeleton-line skeleton-line-lg" />
                        <span className="skeleton-line skeleton-line-lg" />
                    </div>
                </div> 
        </div>
    ))
    );
}
  