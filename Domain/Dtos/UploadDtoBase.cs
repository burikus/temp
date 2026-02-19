namespace Domain.Dtos
{
    public abstract class UploadDtoBase
    {
        public abstract bool IsUpdateDto();
        public abstract bool IsCreateDto();
        public abstract bool IsRemoveDto();
    }
}
