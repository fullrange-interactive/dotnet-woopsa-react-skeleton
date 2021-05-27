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

        // This is the function that is called in our thread.
        // It's an endless loops that sleeps for a second every
        // time we change the random number
        // Woopsa will automatically notice that the RandomNumber value
        // has changed.
        private void UpdateRandomNumber()
        {
            var random = new Random();
            while (true)
            {
                RandomNumber = random.NextDouble();
                Thread.Sleep(TimeSpan.FromSeconds(1));
            }
        }



        public string hello { get; set; } = "coucou";



    }
}
