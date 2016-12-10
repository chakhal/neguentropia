# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.

Vagrant.configure("2") do |config|
  # https://docs.vagrantup.com.

  config.vm.box = "debian/jessie64"
  config.vm.box_check_update = true

  config.vm.network "public_network", interface:"eth0"
  
  config.vm.synced_folder ".", "/vagrant",
    :nfs => true,
    :nfs_version => 4,
    :nfs_udp => false


  # VM NEGUENTROPIA
  config.vm.define "neguentropia" do |config|
#    config.vm.hostname = "neguentropia.dev"

    # eth1
    config.vm.network "private_network", ip: "10.0.0.10"
    config.vm.network "forwarded_port", guest: 80, host: 8080

    config.vm.provider :libvirt do |libvirt|
      libvirt.driver = "kvm"
      libvirt.memory = 2048
      libvirt.cpus = 1
    end


  end


  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
#  config.vm.provision "shell", inline: <<-SHELL
#    sudo su -
#    echo "deb http://packages.dotdeb.org jessie all" > /etc/apt/sources.list.d/dotdeb.list
#    wget -O- https://www.dotdeb.org/dotdeb.gpg | apt-key add -
#    apt update
#
#  SHELL


  config.vm.provision "ansible" do |ansible|
    ansible.verbose = "v"
    ansible.playbook = "_ANSIBLE/playbooks/install_server.yml"
  end






  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"

  # Define a Vagrant Push strategy for pushing to Atlas. Other push strategies
  # such as FTP and Heroku are also available. See the documentation at
  # https://docs.vagrantup.com/v2/push/atlas.html for more information.
  # config.push.define "atlas" do |push|
  #   push.app = "YOUR_ATLAS_USERNAME/YOUR_APPLICATION_NAME"
  # end


end
