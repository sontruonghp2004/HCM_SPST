// components/TimelineEventDetail.tsx
import { TimelineEvent } from '../types/timeline';

interface Props {
  event: TimelineEvent;
}

export default function TimelineEventDetail({ event }: Props) {
  const { detailContent } = event;

  return (
    <div className="prose prose-lg max-w-none text-gray-800">
      <h2 className="text-3xl font-bold text-red-800 mb-6">{event.title} ({event.year})</h2>
      
      <p className="text-xl italic text-red-700 mb-8">{detailContent.quote}</p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-semibold text-red-900 mb-4">Bối cảnh lịch sử</h3>
          <p>{detailContent.context}</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-red-900 mb-4">Ý nghĩa</h3>
          <p>{detailContent.significance}</p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-red-900 mb-4">Kết quả & Bài học</h3>
      <ul className="list-disc pl-6 space-y-3">
        {detailContent.outcomes.map((outcome, i) => (
          <li key={i} className="text-gray-800">{outcome}</li>
        ))}
      </ul>

      <h3 className="text-2xl font-semibold text-red-900 mt-8 mb-4">Nhân vật chính</h3>
      <p className="text-lg">{detailContent.keyFigures.join(', ')}</p>

      <p className="mt-8 text-gray-600 italic border-l-4 border-red-500 pl-6">
        {detailContent.historicalContext}
      </p>
    </div>
  );
}