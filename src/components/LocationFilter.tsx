import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const regions = [
  { value: 'all', label: 'All Regions' },
  { value: 'north-america', label: 'North America' },
  { value: 'europe', label: 'Europe' },
  { value: 'asia-pacific', label: 'Asia Pacific' },
  { value: 'middle-east', label: 'Middle East' },
  { value: 'india', label: 'India' },
];

interface LocationFilterProps {
  onLocationChange: (location: string) => void;
}

const LocationFilter = ({ onLocationChange }: LocationFilterProps) => {
  const [detected, setDetected] = useState<string>('all');

  useEffect(() => {
    // Auto-detect via timezone as a lightweight approach
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz.startsWith('Asia/Kolkata') || tz.startsWith('Asia/Calcutta')) setDetected('india');
    else if (tz.startsWith('America')) setDetected('north-america');
    else if (tz.startsWith('Europe')) setDetected('europe');
    else if (tz.startsWith('Asia')) setDetected('asia-pacific');
    else setDetected('all');
  }, []);

  return (
    <div className="flex items-center gap-2">
      <MapPin className="w-4 h-4 text-muted-foreground" />
      <Select defaultValue={detected} onValueChange={onLocationChange}>
        <SelectTrigger className="w-40 h-8 text-xs">
          <SelectValue placeholder="Select region" />
        </SelectTrigger>
        <SelectContent>
          {regions.map((r) => (
            <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LocationFilter;
