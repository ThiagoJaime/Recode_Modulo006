using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace api_nasa.Models
{
    [Table("Promocoes")]
    public class Promocoes
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public double Preco { get; set; }
        [Required]
        public DateTime Validade { get; set; }

        [JsonIgnore]
        public List<Reservas>? Reserva { get; set; }

    }
}
