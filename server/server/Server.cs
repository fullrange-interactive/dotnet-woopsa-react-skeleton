using System;
using System.Threading;

namespace server
{
    public class Server
    {
        private Thread _thread = null;

        public double RandomNumber { get; set; } = 0.0;

        public Server()
        { 
            _thread = new Thread(UpdateRandomNumber);
            _thread.Start();
        }

        private void UpdateRandomNumber()
        {
            var random = new Random();
            while (true)
            {
                RandomNumber = random.NextDouble();
                Thread.Sleep(TimeSpan.FromSeconds(1));
            }
        }
    }
}
