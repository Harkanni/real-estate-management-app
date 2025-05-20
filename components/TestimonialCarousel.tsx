import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect, useState } from 'react'

const TestimonialCarousel = ({ children }: { children: React.ReactNode }) => {
   const items = Array.from({ length: 9 }, (_, i) => i + 1);
   const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [Autoplay({ playOnInit: false, delay: 3000 })]);
   const [selectedIndex, setSelectedIndex] = useState(0);
   const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);


   const scrollTo = useCallback(
      (index: number) => embla && embla.scrollTo(index),
      [embla]
   );

   const onSelect = useCallback(() => {
      if (!embla) return;
      setSelectedIndex(embla.selectedScrollSnap());
   }, [embla]);

   useEffect(() => {
      if (!embla) return;

      onSelect();
      setScrollSnaps(embla.scrollSnapList());
      embla.on('select', onSelect);
   }, [embla, onSelect]);

   return (
      <div>
         <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
               {children}
            </div>
         </div>

         {/* Pagination Dots */}
         <div className="flex justify-center mt-4 gap-2">
            {scrollSnaps.map((_, index) => (
               <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${selectedIndex === index ? 'bg-blue-600 scale-110' : 'bg-gray-300'
                     }`}
               />
            ))}
         </div>
      </div>
   )
}

export default TestimonialCarousel
