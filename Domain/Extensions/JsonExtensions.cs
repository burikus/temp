using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Domain.Extensions
{
    public static class JsonExtensions
    {
        public static JObject JsonsConcat(this JObject json1, JObject json2)
        {
            if (!json2.HasValues)
                return json1;
            if (!json1.HasValues)
                return json2;
            try
            {
                json1.Merge(json2, new JsonMergeSettings
                {
                    MergeArrayHandling = MergeArrayHandling.Concat
                });

                return json1;
            }
            catch
            {
                return json1;
            }
        }

        public static JObject JsonAdd(this JObject json, Dictionary<string, string> collection)
        {
            if (!collection.HasAny())
                return json;

            try
            {
                return json.JsonsConcat(JObject.Parse(JsonConvert.SerializeObject(collection)));
            }
            catch
            {
                return json;
            }
        }
    }
}
