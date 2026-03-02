namespace Domain.Dtos
{
    public abstract record BaseMasterWorkRecordDto : BaseRecordDto
    {
        public string Name { get; init; }
        public int Position { get; init; }
        public bool IsHidden { get; init; }
    }
}
