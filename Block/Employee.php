<?php

namespace Dtn\Knockout\Block;

class Employee extends \Magento\Framework\View\Element\Template
{

    /**
     * @var array
     */
    protected $layoutProcessors;

    /**
     * @var \Dtn\Knockout\Model\ResourceModel\Employee\CollectionFactory
     */
    protected $employee;

    /**
     * Employee constructor.
     * @param \Magento\Framework\View\Element\Template\Context $context
     * @param \Dtn\Knockout\Model\ResourceModel\Employee\CollectionFactory $employeeFactoryFactory
     * @param array $layoutProcessors
     * @param array $data
     */
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Dtn\Knockout\Model\ResourceModel\Employee\CollectionFactory $employeeFactoryFactory,
        array $layoutProcessors = [],
        array $data = []
    )
    {
        parent::__construct($context, $data);
        $this->jsLayout = isset($data['jsLayout']) && is_array($data['jsLayout']) ? $data['jsLayout'] : [];
        $this->layoutProcessors = $layoutProcessors;
        $this->employee = $employeeFactoryFactory;
    }

    public function getJsLayout()
    {
        foreach ($this->layoutProcessors as $processor) {
            $this->jsLayout = $processor->process($this->jsLayout);
        }
        return \Zend_Json::encode($this->jsLayout);
    }

    /**
     *  Get Employee
     * @return \Dtn\Knockout\Model\ResourceModel\Employee\Collection
     */
    public function getEmployee()
    {
        return $this->employee->create();
    }
}

