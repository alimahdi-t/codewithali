interface Props {
  article: {
    id: number;
    title: string;
    date: string;
    imageUrl: string;
  };
}

const ArticleCard = ({ article, ...props }: Props) => {
  return (
    <div className="flex justify-center items-start gap-2" {...props}>
      <img
        className="aspect-[3/2] w-24 rounded-lg"
        src={article.imageUrl}
        alt=""
      />
      <div className="flex flex-col gap-1">
        <h4 className="text-sm font-medium text-neutral-600">
          {article.title}
        </h4>
        <data className="text-xs font-medium text-brand-600">
          {article.date}
        </data>
      </div>
    </div>
  );
};

export default ArticleCard;
