
import React, { useEffect, useState } from 'react';


const Conveyor = () => {
  // Data for images to make the code more maintainable


  return (
    <Card className="w-[1004px] h-[608px] border-0 shadow-none">
      <CardContent className="p-0 relative">
        <div className="relative w-full h-full -left-px">
          {/* Main background image */}
          <AspectRatio
            ratio={1005 / 602}
            className="absolute w-[1005px] h-[602px] top-1.5 left-0"
          >
            <img
              className={images[0].className}
              alt={images[0].alt}
              src={images[0].src}
            />
          </AspectRatio>

          {/* Green cube image */}
          <div className="inline-flex flex-col items-start gap-2.5 p-2.5 absolute top-0 left-[631px]">
            <img
              className={images[1].className}
              alt={images[1].alt}
              src={images[1].src}
            />
          </div>

          {/* N component */}
          <N className="!absolute !w-[167px] !h-[103px] !top-1.5 !left-[828px]" />
        </div>
      </CardContent>
    </Card>
  );
};

export default Conveyor;
