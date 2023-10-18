import React from 'react';
import { SVGProps } from '../../helpers/types';

const India: React.FC<SVGProps> = () => {
  return (
    <svg
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect y="0.5" width="20" height="16" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_3934_1686" transform="matrix(0.00166667 0 0 0.00208333 -0.0333333 0)" />
        </pattern>
        <image
          id="image0_3934_1686"
          width="640"
          height="480"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAHgCAYAAAA10dzkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAC1cSURBVHgB7d0/rF3VnS/wQxS9UMXxk4ZUCSCFVETYIlRBMiSpoMCmmzSYbqayXb3SpntT2e7yKpsm6bBdhGoSsESqZGRQqEgkm1AlU4Cp4DWe+92bdb3uvvucs/e59/rf+nykK2PfffbZ59B89fut31qP3fl/z99ZAADQjG8tAABoigAIANAYARAAoDECIABAYwRAAIDGCIAAAI0RAAEAGiMAAgA0RgAEAGiMAAgA0BgBEACgMQIgAEBjBEAAgMYIgAAAjREAAQAaIwACADRGAAQAaIwACADQGAEQAKAxAiAAQGMEQACAxgiAAACNEQABABojAAIANEYABABojAAIANAYARAAoDECIABAYwRAAIDGCIAAAI0RAAEAGiMAAgA0RgAEAGiMAAgA0BgBEACgMQIgAEBjBEAAgMYIgAAAjREAAQAaIwACADRGAAQAaIwACADQGAEQAKAxAiAAQGMEQACAxgiAAACNEQABABojAAIANEYABABojAAIANAYARAAoDECIABAYwRAAIDGCIAAAI0RAAEAGiMAAgA0RgAEAGiMAAgA0BgBEACgMQIgAEBjBEAAgMYIgAAAjREAAQAaIwACADRGAAQAaIwACADQGAEQAKAxAiAAQGMEQACAxgiAAACNEQABABojAAIANEYABABojAAIANAYARAAoDECIABAYwRAAIDGCIAAAI0RAAEAGiMAAgA0RgAEAGiMAAgA0BgBEACgMQIgAEBjBEAAgMYIgAAAjREAAQAaIwACADRGAAQAaIwACADQGAEQAKAxAiAAQGMEQACAxgiAAACNEQABABojAAIANEYABABojAAIANAYARAAoDECIABAYwRAAIDGCIAAAI0RAAEAGiMAAgA0RgAEAGiMAAgA0BgBEACgMQIgAEBjBEAAgMYIgAAAjREAAQAaIwACADRGAAQAaIwACADQGAEQAKAxAiAAQGMEQACAxgiAAACNEQABABojAAIANEYABABojAAIANAYARAAoDECIABAYwRAAIDGCIAAAI0RAAEAGiMAAgA0RgAEAGiMAAgA0BgBEACgMQIgAEBjBEAAgMYIgAAAjREA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BABojAAIANAYARAAoDECIABAYwRAAIDGCIAAAI0RAAEAGiMAAgA0RgAEAGiMAAgA0BgBEACgMQIgAEBjBEAAgMYIgAAAjXnsf//f79xZAADQDBVAAIDGCIAAAI0RAAEAGiMAAgA0RgAEAGiMAAgA0BgBEACgMQIgAEBjBEAAgMYIgAAAjREAAQAaIwACADRGAAQAaIwACADQGAEQAKAxAiAAQGMEQACAxgiAAACNEQABABojAAIANEYABABojAAIANAYARAAoDECIABAYwRAAIDGCIAAAI0RAAEAGiMAAgA0RgAEAGiMAAgA0BgBEACgMQIgAEBjBEAAgMYIgAAAjREAAQAaIwACADRGAAQAaIwACADQGAEQAKAxAiAAQGMEQACAxgiAAACNEQABABojAAIANEYABABojAAIANAYARAAoDECIABAYwRAAIDGCIAAAI0RAAEAGiMAAgA0RgAEAGiMAAgA0BgBEACgMQIgAEBjBEAAgMYIgAAAjREAAQAaIwACADRGAAQAaIwACADQGAEQAKAxAiAAQGMEQACAxgiAAACNEQABABojAAIANEYABABojAAIANAYARAAoDECIABAYwRAAIDGCIAAAI0RAAEAGiMAAgA0RgAEAGiMAAgA0BgBEACgMQIgAEBjBEAAgMYIgAAAjREAAQAaIwACADRGAAQAaIwACADQGAEQAKAxAiAAQGMEQACAxgiAAACNEQABABojAAIANEYABABojAAIANAYARAAoDECIABAYwRAAIDGCIAAAI0RAAEAGiMAAgA0RgAEAGiMAAgA0BgBEACgMQIgAEBjBEAAgMYIgAAAjREAAQAaIwACADRGAAQAaIwACADQGAEQAKAxAiAAQGMEQACAxgiAAACNEQABABojAAIANEYABABojAAIANAYARAAoDECIABAYwRAAIDGCIAAAI0RAAEAGiMAAgA0RgAEAGiMAAgA0BgBEACgMQIgAEBjBEAAgMYIgAAAjREAAQAaIwACADRGAAQAaIwACADQGAEQAKAxAiAAQGMEQACAxgiAAACNEQABABojAAIANEYABABojAAIANAYARAAoDECIABAYwRAAIDGCIAAAI0RAAEAGiMAAgA0RgAEAGiMAAgA0BgBEACgMQIgAEBjBEAAgMYIgAAAjREAAQAaIwACADRGAAQAaIwACADQGAEQAKAx/wNUJKoU9nLpYwAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
};

export default India;